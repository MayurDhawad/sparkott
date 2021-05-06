import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-sparkoriginal',
  templateUrl: './sparkoriginal.component.html',
  styleUrls: ['./sparkoriginal.component.scss']
})
export class SparkoriginalComponent implements OnInit {

  originals = []

  constructor( private _movies : MoviesService) { }

  ngOnInit(): void {
    this._movies.getCrime()
    .subscribe(
        res => (
          this.originals = res,
          console.log(res)
        ),
        err => console.log(err)
    )
  }

}
