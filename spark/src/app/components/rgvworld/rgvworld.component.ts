import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-rgvworld',
  templateUrl: './rgvworld.component.html',
  styleUrls: ['./rgvworld.component.scss']
})
export class RgvworldComponent implements OnInit {

  rgvworlds = []

  constructor( private _movies : MoviesService) { }

  ngOnInit(): void {

    this._movies.getCrime()
    .subscribe(
        res => (
          this.rgvworlds = res,
          console.log(res)
        ),
        err => console.log(err)
    )
  }

}
