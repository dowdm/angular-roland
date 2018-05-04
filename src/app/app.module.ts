import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { FeaturedProductComponent } from './featured-product/featured-product.component';
import { FeaturedVideoComponent } from './featured-video/featured-video.component';
import { WhatsNewComponent } from './whats-new/whats-new.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainCarouselComponent,
    FeaturedProductComponent,
    FeaturedVideoComponent,
    WhatsNewComponent,
    ProductCategoriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
