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
    new Video("Roland AIRA", "This video highlights the features of the new Roland AIRA Series", "../assets/videostill.jpg"  ),
    new Video("Roland TR-909", "This video highlights Jeff Mills with a TR-909", "../assets/videostill.jpg"  )
  ];
  masterNewsArray: News[] =[
    new News('New Gear at NAMM', 'This winter NAMM brought 2 new dum machines to the stage in Anaheim', "https://media.sweetwater.com/api/i/f-webp__b-original__w-300__h-300__bg-ffffff__q-85__ha-687cad0ea7629c90__hmac-eb49b60d002e0f1c1cdceae7fd67c45de8512264/images/items/350/MX1.jpg.auto.webp", 'sdkuufh so;duf suhd fsudhf iusdh ofsd oifh soidhf lsdh fkhsd '),
    new News('Roland Gives to Charity', 'This winter NAMM brought 2 new dum machines to the stage in Anaheim', "https://static.bhphoto.com/images/images500x500/roland_tr_8s_rhythm_performer_1520225178000_1393506.jpg", 'sdkuufh so;duf suhd fsudhf iusdh ofsd oifh soidhf lsdh fkhsd '),
    new News('Noise Art', 'This winter NAMM brought 2 new dum machines to the stage in Anaheim', 'https://static.bhphoto.com/images/images500x500/roland_tr_8s_rhythm_performer_1520225178000_1393506.jpg' , 'sdkuufh so;duf suhd fsudhf iusdh ofsd oifh soidhf lsdh fkhsd ')
  ];

  ngOnInit() {
  }

}
