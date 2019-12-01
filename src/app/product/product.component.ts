import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Products= []
  constructor(private service:ProductService) { }

  ngOnInit() 
  {
    this.service.getProduct().subscribe(response=>{
      if(response['status'] === 'success')
      {
             this.Products=response['data']
      }
      else
      {
 console.log('error',response['error']);
 
      }
    })
  }

}
