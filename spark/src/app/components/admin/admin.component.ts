import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { AuthService } from 'src/app/services/auth.service';
import { MoviesService } from 'src/app/services/movies.service';
import * as $ from 'jquery'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    constructor( ){}

    ngOnInit(): void {
      $(function() {
        $('#collapse').on('click', function(){
            $('.vertical-nav').toggleClass('toggle')
        })
    })
        $(function() {
          $('#collapse').on('click', function(){
              $('.page-content').toggleClass('toggle')
          })
      })
    }

 
}
