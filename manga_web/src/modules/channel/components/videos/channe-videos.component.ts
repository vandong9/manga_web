import { Component, Input, OnInit } from '@angular/core';
import { IVideoLinkItem } from 'src/models/video-link-item';
import { VideoService } from 'src/services/video.service';

@Component({
  selector: 'channel-videos',
  templateUrl: 'channe-videos.component.html',
})
export class ChannelVideosComponent implements OnInit {
  SelectedTab = SelectedTab;
  @Input() channelID: String = '';
  selectedTab: SelectedTab = SelectedTab.recent;
  recentUploadedVideos: IVideoLinkItem[] = [];
  popularVideos: IVideoLinkItem[] = [];

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videoService
      .getRecentVideoOfChannel(this.channelID)
      .subscribe((videos) => {
        this.recentUploadedVideos = this.recentUploadedVideos.concat(videos);
      });
    this.videoService
      .getPopularVideoOfChannel(this.channelID)
      .subscribe((videos) => {
        this.popularVideos = this.popularVideos.concat(videos);
      });
  }

  onSelectMenuItem(tab: SelectedTab) {
    this.selectedTab = tab;
  }
}

enum SelectedTab {
  recent,
  popular,
}
