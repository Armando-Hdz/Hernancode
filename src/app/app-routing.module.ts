import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './ui/blog/blog.component';
import { ContactComponent } from './ui/contact/contact.component';

import { HomeComponent } from './ui/home/home.component';
import { IComponent } from './ui/i/i.component';
import { ProductsComponent } from './ui/products/products.component';
import { HardComponent } from './ui/solutions/hard/hard.component';
import { SoftComponent } from './ui/solutions/soft/soft.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'hardware',
    component: HardComponent
  },
  {
    path: 'software',
    component: SoftComponent
  },
  {
    path: 'me',
    component: IComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
