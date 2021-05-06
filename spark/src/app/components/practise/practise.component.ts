import { Component, OnInit } from '@angular/core';
import { PractiseService } from 'src/app/services/practise.service';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.scss']
})
export class PractiseComponent implements OnInit {

    products = [];

    constructor(private apiService: PractiseService) { }
    ngOnInit() {

      this.apiService.get().subscribe((data: any[])=>{  
        console.log(data);  
        this.products = data;  
      })  
    }
  }

