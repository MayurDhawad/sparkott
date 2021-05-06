import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies = []

  constructor(private _movies : MoviesService) { }

  ngOnInit(): void {

    this._movies.getComingSoon()
        .subscribe(
            res => (
              this.movies = res,
              console.log(res)
            ),
            err => console.log(err)
        )
    }

}
