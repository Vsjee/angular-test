import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { publicRoutes, privateRoutes } from 'src/app/models';
import { LogoutComponent } from '../logout';
import { authKey } from 'src/app/services';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    AppRoutingModule,
    CommonModule,
    LogoutComponent,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
  ],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  publicRoutes = publicRoutes;
  privateRoutes = privateRoutes;

  logoutBtn: boolean = false;

  menu: boolean = false;
  menuHidde: boolean = true;

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      console.log(this.router.url);
      const data = localStorage.getItem(authKey);
      const data2 = data !== null ? JSON.parse(data) : null;
      if (data !== null) {
        this.logoutBtn = true;
      } else {
        this.logoutBtn = false;
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if (window.screen.width < 510) {
      this.menu = true;
      this.menuHidde = false;
    } else {
      this.menu = false;
      this.menuHidde = true;
    }
  }
}
