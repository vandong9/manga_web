import { Component, OnInit } from '@angular/core';
import { IVideoLinkItem } from 'src/models/video-link-item';
import { VideoService } from 'src/services/video.service';

@Component({
  selector: 'play-video-page',
  templateUrl: 'play-video.page.html',
})
export class PlayVideoPage implements OnInit {
  toggle: Boolean = false;
  relativeVideos: IVideoLinkItem[] = [];
  videoID: String = ""

  constructor(private videoService: VideoService){}
  ngOnInit(): void {
    
    this.videoService.getRelativeVideo().subscribe((videos)=> {
      this.relativeVideos = this.relativeVideos.concat(videos)
    })
  }

  
  listenToggleHambegerEmit(event: any) {
    console.log(event);
    this.toggle = !this.toggle;
  }

}
