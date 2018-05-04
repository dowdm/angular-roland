import { Component } from '@angular/core';
import { Product } from './models/product.model';
import { Category } from './models/category.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  masterProductArray: Product[]=[
    new Product("Piano", "Digital Piano", "FP-90", 999, "Our Flagship Digital Piano", "lorehahs;ofdgh a;sfugh asiuf goasuaisugh asf giaufshg ialfh g", "https://static.roland.com/assets/images/products/categories/rct_pianos.jpg" )
  ];

  masterButtonCategory: Category[] = [
    new Category("Products",["Pianos", "Organs", "Synthesizers", "Keyboards", "Guitar and Bass", "Drums and Percussion", "Production", "Amplifiers", "AIRA and DJ", "Pro Audio", "Pro Video", "Accessories"]),
    new Category("Community", ['']),
    new Category("Support", ['']),
    new Category("Artists", ['']),
    new Category("Blog", ['']),
    new Category("News & Events", ['']),
    new Category("Login", [''])

  ];
}
