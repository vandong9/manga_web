import { Component, Input, OnInit } from '@angular/core';
import { VideoLinkItem } from 'src/models/video-link-item';
import { VideoService } from 'src/services/video.service';

@Component({
  selector: 'channel-short',
  templateUrl: 'channel-short.component.html',
})
export class ChannelShortComponent implements OnInit {
  SelectedTab = SelectedTab;
  @Input() channelID: String = '';
  selectedTab: SelectedTab = SelectedTab.recent;
  recentUploadedVideos: VideoLinkItem[] = [];
  popularVideos: VideoLinkItem[] = [];

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
