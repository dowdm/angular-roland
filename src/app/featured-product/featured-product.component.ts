import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {Product} from '../models/product.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.css'],
   providers: [ProductService]
})
export class FeaturedProductComponent implements OnInit{

  @Output () clickSender = new EventEmitter();
  selectedProduct = null;

constructor(private productService: ProductService) { }

  products: FirebaseListObservable<any[]>;

  ngOnInit() {
      this.products = this.productService.getProducts();
    }

  viewDetails(currentProduct){
    if(this.selectedProduct === null) {
      this.selectedProduct = currentProduct;
    } else {
      this.selectedProduct = null;
    }
  }

}
