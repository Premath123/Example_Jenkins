import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private defaultRoute: Router, private http: HttpClient) { }

  public sendToken(token: string) {
    localStorage.setItem('token', token);
  }

  public isAuthenticated() {
    return !!localStorage.getItem('token');
  }
  public logout() {
    localStorage.removeItem('token');
    this.defaultRoute.navigate(['../login']);
  }

  public login(credentials) {
    this.http.post<any>('http://localhost:54923/api/account/login', credentials).subscribe(res => {
    this.authenticate(res);
  });
}
  authenticate(res) {
    localStorage.setItem('token', res);
    this.defaultRoute.navigate(['/dashboard']);
  }

  public register(credentials) {
    this.http.post<any>('http://localhost:54923/api/account', credentials).subscribe(res => {
      this.authenticate(res); });
  }
}
