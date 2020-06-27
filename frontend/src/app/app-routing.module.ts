import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { VideoListComponent } from './components/video-list/video-list.component';



const routes: Routes = [
  { path: '', redirectTo: 'video', pathMatch: 'full' },
  { path: 'video', component: VideoListComponent },
  { path: 'video/:id', component: VideoDetailsComponent },
  { path: 'add', component: AddVideoComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
