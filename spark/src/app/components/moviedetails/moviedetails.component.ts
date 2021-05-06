import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

  movies ;
  selectedItem;

  constructor(  private _movies :MoviesService,
                private route : ActivatedRoute) { }

  ngOnInit(): void {

      let id = parseInt(this.route.snapshot.paramMap.get('id'))
      this.selectedItem = id

       this._movies.getPopular()
       .subscribe(
            res=> (
                this.movies = res[this.selectedItem -1],
                console.log(this.movies)
            ),
            err => console.log(err)
       )

  }

  

}
