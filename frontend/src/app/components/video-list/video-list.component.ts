import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videos: any;
  currentVideo = null;
  currentIndex = -1;
  name = '';


  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.retrieveVideos();

  }

  retrieveVideos() {
    this.videoService.getAll()
      .subscribe(
        data => {
          this.videos = data;
          // console.log(data);
          
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveVideos();
    this.currentVideo = null;
    this.currentIndex = -1;
  }

  setActiveVideo(video, index) {
    this.currentVideo = video;
    this.currentIndex = index;
    // console.log(this.currentVideo);
  }

}
