import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../models/video.model';
@Component({
  selector: 'app-featured-video',
  templateUrl: './featured-video.component.html',
  styleUrls: ['./featured-video.component.css']
})
export class FeaturedVideoComponent {

  @Input () childVideoArray: Video[];

}
