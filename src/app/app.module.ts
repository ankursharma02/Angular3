import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {demo2} from'./demo2/demo2'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { Demo1Component } from './demo1/demo1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroeDetailsComponent } from './heroe-details/heroe-details.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    Demo1Component,
    demo2,
    HeroeDetailsComponent,
    MessagesComponent,
    DashboardComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
