import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-webseries',
  templateUrl: './webseries.component.html',
  styleUrls: ['./webseries.component.scss']
})
export class WebseriesComponent implements OnInit {

  webseries = []

  constructor( private _movies : MoviesService) { }

  ngOnInit(): void {

    this._movies.getComingSoon()
        .subscribe(
            res => (
              this.webseries = res,
              console.log(res)
            ),
            err => console.log(err)
        )
    }
}
