import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { FeaturedProductComponent } from './featured-product/featured-product.component';
import { FeaturedVideoComponent } from './featured-video/featured-video.component';
import { WhatsNewComponent } from './whats-new/whats-new.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ProductsComponent } from './products/products.component';
import { CommunityComponent } from './community/community.component';
import { SupportComponent } from './support/support.component';
import { ArtistsComponent } from './artists/artists.component';
import { BlogComponent } from './blog/blog.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainCarouselComponent,
    FeaturedProductComponent,
    FeaturedVideoComponent,
    WhatsNewComponent,
    ProductCategoriesComponent,
    ProductsComponent,
    CommunityComponent,
    SupportComponent,
    ArtistsComponent,
    BlogComponent,
    NewsComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
