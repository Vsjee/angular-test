import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetCoffeeService {
  constructor(private http: HttpClient) {}

  // endopoints coffee/{hot || iced}
  getCoffees(endpoint: string) {
    return this.http.get(`https://api.sampleapis.com/coffee/${endpoint}`);
  }
}
