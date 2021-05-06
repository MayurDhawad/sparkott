import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = []

  constructor( private _auth : AuthService) { }

  ngOnInit(): void {

    this._auth.getUserData()
      .subscribe(
          res => {
              this.users = res,
              console.log(this.users)
          },
              err => console.log(err)
          )
  }

}
