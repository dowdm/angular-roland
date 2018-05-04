import { Component, Input, Output, EventEmitter } from '@angular/core';
import { News } from '../models/news.model'
@Component({
  selector: 'app-whats-new',
  templateUrl: './whats-new.component.html',
  styleUrls: ['./whats-new.component.css']
})
export class WhatsNewComponent {

  @Input () childNewsArray: News[];
  @Output () clickSender = new EventEmitter();
  selectedNews = null;

  viewDetails(currentNews){
    if(this.selectedNews === null) {
      this.selectedNews = currentNews;
    } else {
      this.selectedNews = null;
    }
  }
}
