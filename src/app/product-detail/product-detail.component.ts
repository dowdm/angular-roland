import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService]
})
export class ProductDetailComponent implements OnInit {

  @Input() selectedProduct;
  productId: string;
  productToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.productId = urlParameters['id'];
  });
  this.productService.getProductById(this.productId).subscribe(dataLastEmittedFromObserver => {
    this.productToDisplay = dataLastEmittedFromObserver;

    })
  }
}
