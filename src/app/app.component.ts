import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Product } from './models/product.model';
import { Category } from './models/category.model';
import { Video } from './models/video.model';
import { News } from './models/news.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  masterProductArray: Product[]=[
    new Product("Piano", "Digital Piano", "FP-90", 999, "Our Flagship Digital Piano", "lorehahsofdgh asfugh asiuf goasuaisugh asf giaufshg ialfh g", "https://static.roland.com/assets/images/products/categories/rct_pianos.jpg"),
    new Product("Guitar", "Electric Guitar", "GR-70", 888, "Our Flagship Electric Guitar", "lorehahsofdgh asfugh asiuf goasuaisugh asf giaufshg ialfh g", "https://static.roland.com/assets/images/products/categories/rct_pianos.jpg"),
    new Product("AIRA and DJ", "Performance Sampler", "SP-404", 777, "Our Flagship Performance Sampler", "lorehahsofdgh asfugh asiuf goasuaisugh asf giaufshg ialfh g", "https://static.roland.com/assets/images/products/categories/rct_pianos.jpg")
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
}
