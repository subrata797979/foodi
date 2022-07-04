import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MainComponent} from "./main/main.component";
import {AboutComponent} from "./about/about.component";
import {RoutingModule} from "./routing/routing.module";
import { HeaderComponent } from './header/header.component';
import {NgxHideOnScrollModule} from "ngx-hide-on-scroll";
import { CategoryComponent } from './APIs/category/category.component';
import { FoodComponent } from './APIs/food/food.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    HeaderComponent,
    CategoryComponent,
    FoodComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    NgxHideOnScrollModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
