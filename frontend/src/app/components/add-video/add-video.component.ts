import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css'],
})
export class AddVideoComponent implements OnInit {
  file: File;
  submitted = false;

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {}

  selectFile(event) {
    this.saveVideo(event.target.files);
  }

  saveVideo(files: FileList) {
    if (files.length == 0) {
      console.log('No file selected!');
      return;
    }
    let file: File = files[0];
    this.videoService.create(file).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newVideo() {
    this.submitted = false;
    this.file;
  }
}
