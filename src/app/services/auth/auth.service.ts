import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export const authKey = 'auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authenticate(name: string, password: string) {
    localStorage.setItem(
      authKey,
      JSON.stringify({ name: `${name}`, password: `${password}` })
    );
  }

  isAuthenticated() {
    const res = localStorage.getItem(authKey);
    if (res !== null) {
      return true;
    }

    return false;
  }
}
