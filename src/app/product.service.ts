import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url ='http://192.168.1.218:9898/product'
  constructor(private http:HttpClient) { }


  getProduct(){
    return this.http.get(this.url)
  }
}
