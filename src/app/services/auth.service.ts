import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:5000'
  token: any;

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    this.http.post(this.url + '/authenticate', { email: email, password: password })
      .subscribe((resp: any) => {
        console.log(resp.token)
        localStorage.setItem('auth_token', resp.token)
      })
  }

  logout() {
    localStorage.removeItem('token')
  }


  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null)
  }
}
