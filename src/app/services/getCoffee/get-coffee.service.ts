import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetCoffeeService {
  constructor(private http: HttpClient) {}

  // endopoints coffee/{hot || iced}
  getCoffees() {
    return this.http.get('https://api.sampleapis.com/coffee/');
  }
}
