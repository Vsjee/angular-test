import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { publicRoutes } from 'src/app/models';
import { authKey } from 'src/app/services';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  constructor(private router: Router) {}

  handleLogout() {
    localStorage.removeItem(authKey);
    this.router.navigate([`/${publicRoutes.HOME}`]);
  }
}
