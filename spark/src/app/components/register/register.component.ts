import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUser = new User()

  constructor( private _auth : AuthService,
               private _router : Router) { }

  ngOnInit(): void {
  }

  registerNewUser(){
      this._auth.registerUserData(this.registerUser)
          .subscribe(
              res => (
                  this.registerUser = res,
                  localStorage.setItem('token', res.token),
                  this._router.navigate(['/home'])
              ),
              err => console.log(err)
          )
  }

}
