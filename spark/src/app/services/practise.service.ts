import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PractiseService {

  private SERVER_URL = "http://localhost:3000/products";
	constructor(private httpClient: HttpClient) { }

	get(){  
		return this.httpClient.get(this.SERVER_URL);  
	}  

	post(product){  
		return this.httpClient.post(this.SERVER_URL, product);  
	}  

  update(movie){
    return this.httpClient.put(this.SERVER_URL + movie._id, {})
  }

  delete(movie){
    return this.httpClient.delete(this.SERVER_URL + movie._id)
  }



}
