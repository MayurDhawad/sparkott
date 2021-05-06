import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  banners = []
  popular = []
  comingsoon = []
  action = []
  originals = []
  comedy = []
  crime = []
  nameSearch = ''

  constructor( private _movies : MoviesService,
               private router : Router){ }

  ngOnInit(): void {

    this._movies.getBanner()
      .subscribe(
          res => (
            this.banners = res,
            console.log(res)
          ),
          err => console.log(err)
      )

      this._movies.getPopular()
      .subscribe(
          res => (
            this.popular = res,
            console.log(res)
          ),
          err => console.log(err)
      )

      this._movies.getComingSoon()
      .subscribe(
          res => (
            this.comingsoon = res,
            console.log(res)
          ),
          err => console.log(err)
      )

      this._movies.getAction()
      .subscribe(
          res => (
            this.action = res,
            console.log(res)
          ),
          err => console.log(err)
      )

      this._movies.getOriginals()
      .subscribe(
          res => (
            this.originals = res,
            console.log(res)
          ),
          err => console.log(err)
      )

      this._movies.getComedy()
      .subscribe(
          res => (
            this.comedy = res,
            console.log(res)
          ),
          err => console.log(err)
      )

      this._movies.getCrime()
      .subscribe(
          res => (
            this.crime = res,
            console.log(res)
          ),
          err => console.log(err)
      )
  }

  onselect(popul:any){
     this.router.navigate(['/movies', popul.id])
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin: 10,
    navText: [ '' ],
    navSpeed: 700,
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 4
      },
      740: {
        items: 6
      },
      940: {
        items: 6
      }
    },
    nav: false
  }

  originals1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin: 10,
    navText: [ '' ],
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: false
  }

}
