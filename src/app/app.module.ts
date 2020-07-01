import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppClassStyleComponent } from './app-class-style/app-class-style.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopoverModule } from 'ngx-bootstrap/popover';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ContactComponent } from './contact/contact.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { DesignutilityService } from './services/designutility.service';
import { HttpClientModule } from '@angular/common/http';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { TestdirectiveDirective } from './appDirective/testdirective.directive';
import { DropdownDirective } from './appDirective/dropdown.directive';


const Routs:Routes=[
  {path:'',redirectTo:'login' ,pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'product',component:ProductsComponent},
  {path:'by-product',component:ParentComponent},
  {path:'**',component:ErrorComponent},
  

]

@NgModule({
  declarations: [
    AppComponent,
    AppClassStyleComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    LoginComponent,
    ErrorComponent,
    ParentComponent,
    ChildComponent,
    ContactComponent,
    Card1Component,
    Card2Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    TestdirectiveDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    PopoverModule.forRoot(),
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(Routs),
    HttpClientModule
    
  ],
  providers: [DesignutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
