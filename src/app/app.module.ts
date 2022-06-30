import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {AboutComponent} from "./about/about.component";
import {RoutingModule} from "./routing/routing.module";
import { HeaderComponent } from './header/header.component';
import {NgxHideOnScrollModule} from "ngx-hide-on-scroll";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    NgxHideOnScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
