import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBar } from './component/navbar.component'
import { MainView } from './component/mainview.component';
import { MediaFrameeComponent } from './component/mediaframe.component';
import { ContentJumboComponent } from './component/contentJumbo.component';
import { ImageLoaderComponent } from './component/imageloader.component';


import {MatchHeightDirective} from './directive/match-height.directive'


// Shivam Components below

import { FeatureComponent } from './component/progressListner.component';


// import {  trigger,state,style, animate,  transition } from '@angular/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({



  declarations: [
    AppComponent,
    NavBar,
    MediaFrameeComponent,
    MainView,
    MatchHeightDirective,
    ContentJumboComponent,

    ImageLoaderComponent,

//Shivam imports
FeatureComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  
  bootstrap: [AppComponent ]
})
export class AppModule { }
