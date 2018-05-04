import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent  {
  @Input () childButtonCategory: Category[];



}
