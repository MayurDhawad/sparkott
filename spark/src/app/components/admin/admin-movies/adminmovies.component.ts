import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-adminmovies',
  templateUrl: './adminmovies.component.html',
  styleUrls: ['./adminmovies.component.scss']
})
export class AdminmoviesComponent implements OnInit {

  movies = []
  newmovie = new Movie();
  selectedMovie: Movie
  addedmovie;

  constructor(  private fb : FormBuilder,
                private _movies : MoviesService) { }

  addnewMovie = this.fb.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      cast: ['', Validators.required],
      language: ['', Validators.required],
      release_date: ['', Validators.required],
      description: ['', Validators.required],
      directors: ['', Validators.required],
      producers: ['', Validators.required],
      writers: ['', Validators.required],
  })             

  ngOnInit(): void {
      this._movies.getMovies()
      .subscribe(
            res => this.movies = res,
            err => console.log(err)
      )
  }

  addMovie(){
    console.log(this.addnewMovie.value)
      this._movies.postMovies(this.addnewMovie.value)
      .subscribe(
          res => this.movies.push(res),
          err => console.log(err)
      )
      this.addnewMovie.reset()
  }

  openupdateModal(movie: Movie){
      this.selectedMovie = movie
  }

  // updateMovie(movie: Movie){
  //    this._movies.UpdateMovies(movie)
  //    .subscribe(
  //        res => console.log(res),
  //        err => console.log(err)
  //    )
  // }

  deletemovie(movie : Movie ){
      let moviesArray = this.movies
      this._movies.deleteMovies(movie)
      .subscribe(
          res => {
              for(let i=0; i < moviesArray.length; i++){
                if(moviesArray[i]._id === movie._id)
                {
                  moviesArray.splice(i,1)
                }
              }
          }
      );
    }
  }
