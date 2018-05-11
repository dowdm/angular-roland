import { Component, OnInit } from '@angular/core';
import { Video } from '../models/video.model';
import { News } from '../models/news.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  masterVideoArray: Video[] = [
    new Video("Roland TRS-8 Overview", "This video highlights the features of the new Roland TRS-8", "../assets/videostill.jpg" ),
    new Video("Roland AIRA", "This video highlights the features of the new Roland AIRA Series", "https://static.roland.com/assets/promos/jpg/promo_fv_tr-8s.jpg"  ),
    new Video("Roland TR-909", "This video highlights Jeff Mills with a TR-909", "https://static.roland.com/assets/promos/jpg/promo_fv_spotlight.jpg"  )
  ];
  masterNewsArray: News[] =[
    new News('New Gear at NAMM', 'This winter NAMM brought 2 new dum machines to the stage in Anaheim', "https://static.roland.com/assets/promos/jpg/promo_fc_hybrid_drums.jpg", 'sdkuufh so;duf suhd fsudhf iusdh ofsd oifh soidhf lsdh fkhsd '),
    new News('Roland Gives to Charity', 'This winter NAMM brought 2 new dum machines to the stage in Anaheim', "https://static.roland.com/assets/promos/jpg/promo_fc_melodics.jpg", 'sdkuufh so;duf suhd fsudhf iusdh ofsd oifh soidhf lsdh fkhsd '),
    new News('Noise Art', 'This winter NAMM brought 2 new dum machines to the stage in Anaheim', 'https://static.roland.com/assets/promos/jpg/promo_fc_scratch.jpg' , 'sdkuufh so;duf suhd fsudhf iusdh ofsd oifh soidhf lsdh fkhsd ')
  ];

  ngOnInit() {
  }

}
