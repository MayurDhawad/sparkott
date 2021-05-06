import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userdataUrl = 'http://localhost:3000/userapi/userdata';
  private profile = 'http://localhost:3000/userapi/userdata'
  private registerUrl = 'http://localhost:3000/userapi/register';
  private loginUrl = 'http://localhost:3000/userapi/login';

  constructor(private _http : HttpClient,
              private _router : Router) { }

  getUserData(){
      return this._http.get<any>(this.userdataUrl)
  }

  registerUserData(user:any){
      return this._http.post<any>( this.registerUrl, user)
  }

  loginUserData(user:any){
      return this._http.post<any>(this.loginUrl, user)
  }

  loggedIn(){
      return !!localStorage.getItem('token')
  }

  loggedOut(){
      localStorage.removeItem('token'),
      this._router.navigate(['/login'])
  }

}
