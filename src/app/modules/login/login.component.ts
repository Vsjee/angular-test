import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services';
import { privateRoutes } from 'src/app/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}

  name = new FormControl();
  password = new FormControl();

  handleSubmit() {
    if (this.name.value !== null && this.password.value !== null) {
      this.auth.authenticate(this.name.value, this.password.value);
    }
    this.router.navigate([`./${privateRoutes.FAVORITES}`]);
  }
}
