import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper/wrapper.component';



@NgModule({
  declarations: [
   HomeComponent,
   HeaderComponent,
   WrapperComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports:[HomeComponent, HeaderComponent]
})
export class PagesModule { }
