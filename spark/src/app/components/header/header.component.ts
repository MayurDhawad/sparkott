import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  users = [];

  constructor( public _auth : AuthService,
               public _router : Router  ) { }

  ngOnInit(): void {
      this._auth.getUserData()
      .subscribe(
          res =>( 
            this.users = res,
            console.log(res)
            ),
          err => console.log(err)
      )
  }

  loggedOut(){
    localStorage.removeItem('token'),
    this._router.navigate(['/login'])
}
  

}
