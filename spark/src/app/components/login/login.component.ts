import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUser = new User()

  constructor( private _auth : AuthService,
               private _router : Router) { }

  ngOnInit(): void {
  }

  loginNewUser(){
      this._auth.loginUserData(this.loginUser)
          .subscribe(
              res => (
                  this.loginUser = res,
                  localStorage.setItem('token', res.token),
                  this._router.navigate(['/home'])  
              ),
              err => console.log(err)
          )
  }

}
