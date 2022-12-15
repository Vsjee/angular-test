import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  standalone: true,
  imports: [
    AppRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
  ],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  menu: boolean = false;
  menuHidde: boolean = true;

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
