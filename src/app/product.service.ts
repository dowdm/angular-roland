import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProductService {
  products: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.products = database.list('products');
  }
  getProducts(){
    return this.products;
  }
  getProductById(productId: string) {
    return this.database.object('products/' + productId);
  }
}
