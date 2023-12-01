import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../types/user.types';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(body: User): Observable<any> {
    return this.http.post('http://localhost:3000/' + 'signin', body);
  }

  register(body: User): Observable<any> {
    return this.http.post('http://localhost:3000/' + 'signup', body);
  }
}
