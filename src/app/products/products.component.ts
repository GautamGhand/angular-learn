import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products:any|undefined=[];

  constructor(private productService:ProductService){

  }

  getProductsData(){
    this.productService.getProductsData().subscribe((data:any)=>{
      this.products=data.products;
    });
  }
}
