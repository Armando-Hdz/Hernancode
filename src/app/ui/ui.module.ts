import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { SoftComponent } from './solutions/soft/soft.component';
import { HardComponent } from './solutions/hard/hard.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { IComponent } from './i/i.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    SolutionsComponent,
    SoftComponent,
    HardComponent,
    BlogComponent,
    ContactComponent,
    IComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    ProductsComponent,
    SolutionsComponent,
    SoftComponent,
    HardComponent,
    BlogComponent,
    ContactComponent,
    IComponent
  ]
})
export class UiModule { }
