import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Product} from '../models/product.model';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.css']
})
export class FeaturedProductComponent {
  @Input () childProductArray: Product[];
  @Output () clickSender = new EventEmitter();
  selectedProduct = null;

  viewDetails(currentProduct){
    if(this.selectedProduct === null) {
      this.selectedProduct = currentProduct;
    } else {
      this.selectedProduct = null;
    }
  }

}
