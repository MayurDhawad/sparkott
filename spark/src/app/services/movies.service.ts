import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  private bannerUrl = "/assets/banner.json"
  private popularUrl = "/assets/popular.json"
  private comingsoonUrl = "/assets/comingsoon.json"
  private actionUrl = "/assets/action.json"
  private originalsUrl = '/assets/originals.json'
  private comedyUrl = '/assets/comedy.json'
  private crimeUrl = '/assets/crime.json'
  private getmoviesUrl = 'http://localhost:3000/moviesapi/movies'
  private postmoviesUrl = 'http://localhost:3000/moviesapi/movie'
  private updatemoviesUrl = 'http://localhost:3000/moviesapi/movie/'
  private deletemoviesUrl = 'http://localhost:3000/moviesapi/movie/'

  constructor(private _movies : HttpClient) { }

  getBanner(){
    return this._movies.get<any>(this.bannerUrl)
  }

  getPopular(){
      return this._movies.get<any>(this.popularUrl)
  }

  getComingSoon(){
      return this._movies.get<any>(this.comingsoonUrl)
  }

  getAction(){
      return this._movies.get<any>(this.actionUrl)
  }

  getOriginals(){
      return this._movies.get<any>(this.originalsUrl)
  }

  getComedy(){
    return this._movies.get<any>(this.comedyUrl)
  }

  getCrime(){
    return this._movies.get<any>(this.crimeUrl)
  }

  /*------------------- Movies ------------------------*/

  getMovies(){
    return this._movies.get<any>(this.getmoviesUrl)
  }

  postMovies(movie: Movie){
    return this._movies.post<any>(this.postmoviesUrl, movie)
  }

  UpdateMovies(movie : Movie){
    return this._movies.put<any>(this.updatemoviesUrl, movie._id)
  }

  deleteMovies(movie : Movie){
    return this._movies.delete(this.deletemoviesUrl + movie._id)
  }
}
