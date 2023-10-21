import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent, 
    FooterComponent,
    AboutComponent
  ]
})
export class CoreModule { }
