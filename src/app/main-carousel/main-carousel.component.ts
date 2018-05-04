import { Component,Input, Output, EventEmitter} from '@angular/core';
import {Product} from '../models/product.model';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.css']
})
export class MainCarouselComponent{

  @Input () childProductArray: Product[];


}
