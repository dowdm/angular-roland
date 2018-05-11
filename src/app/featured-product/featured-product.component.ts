import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {Product} from '../models/product.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProductService } from '../product.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.css'],
   providers: [ProductService]
})
export class FeaturedProductComponent implements OnInit{

currentRoute: string = this.router.url;

constructor(private router: Router, private productService: ProductService) { }

  products: FirebaseListObservable<any[]>;

  ngOnInit() {
      this.products = this.productService.getProducts();
    }

  goToDetailPage(clickedProduct) {
    this.router.navigate(['products', clickedProduct.$key]);
  }
}
