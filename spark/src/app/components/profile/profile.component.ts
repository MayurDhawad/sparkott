import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile:any;
  selectedItem;

  constructor( private _auth : AuthService ,
               private route : ActivatedRoute ) { }

  ngOnInit(): void {

  }

}
