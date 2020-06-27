import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddVideoComponent } from './components/add-video/add-video.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { VideoListComponent } from './components/video-list/video-list.component';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatVideoModule } from 'mat-video';


@NgModule({
  declarations: [
    AppComponent,
    AddVideoComponent,
    VideoDetailsComponent,
    VideoListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // NgbModule,
    MatVideoModule
  ],
  providers: [   ],
  bootstrap: [AppComponent],
})
export class AppModule {}
