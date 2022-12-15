import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetUserService {
  constructor(private http: HttpClient) {}

  //136 = Gazorpazorpfield
  getUser() {
    return this.http.get('https://rickandmortyapi.com/api/character/136');
  }
}
