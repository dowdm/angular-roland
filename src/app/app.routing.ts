import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CommunityComponent } from './community/community.component';
import { SupportComponent } from './support/support.component';
import { ArtistsComponent } from './artists/artists.component';
import { BlogComponent } from './blog/blog.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'community',
    component: CommunityComponent
  },
  {
    path: 'support',
    component: SupportComponent
  },
  {
    path: 'artists',
    component: ArtistsComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
