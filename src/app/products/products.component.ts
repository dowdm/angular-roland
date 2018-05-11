import { Component, Output, EventEmitter,  OnInit } from '@angular/core';
import {Product} from '../models/product.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
   providers: [ProductService]
})
export class ProductsComponent implements OnInit {



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
