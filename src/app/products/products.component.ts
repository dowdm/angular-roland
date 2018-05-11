import { Component, Output, EventEmitter,  OnInit } from '@angular/core';
import {Product} from '../models/product.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
   providers: [ProductService]
})
export class ProductsComponent implements OnInit {

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
