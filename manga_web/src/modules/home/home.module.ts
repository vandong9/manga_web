import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { VideoLinkItem } from 'src/models/video-link-item';
import { VideoService } from 'src/services/video.service';

@Component({
  selector: 'home-module',
  templateUrl: 'home.module.html',
})
export class HomePageComponent {
  toggle: Boolean = false;

  videoLinks: VideoLinkItem[] = [];
  
  constructor(private videoService: VideoService) {
    videoService.getAll().subscribe((videos) => {
      this.videoLinks = this.videoLinks.concat(videos);
    });
  }

  listenToggleHambegerEmit(event: any) {
    console.log(event);
    this.toggle = !this.toggle;
  }
}

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [HomePageComponent],
  // providers: [HttpErrorHandler],
  exports: [HomePageComponent],
  bootstrap: [HomePageComponent],
})
export class HomeModule {}
