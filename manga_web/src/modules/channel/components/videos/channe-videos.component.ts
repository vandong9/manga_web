import { Component, Input, OnInit } from "@angular/core";
import { VideoLinkItem } from "src/models/video-link-item";
import { VideoService } from "src/services/video.service";

@Component({
    selector: 'channel-videos',
    template:`
    <div>
        
    </div>
    <video-grid [videoLinks]="recentUploadedVideos" [isShowChannel]="false"></video-grid>
    `
})
export class ChannelVideosComponent implements OnInit {
    @Input() channelID: String = ""
    selectedTab: SelectedTab = SelectedTab.recent
    recentUploadedVideos: VideoLinkItem[] = []
    popularVideos: VideoLinkItem[] = []
    constructor(private videoService: VideoService) {

      }
    ngOnInit(): void {
        this.videoService.getRecentVideoOfChannel(this.channelID).subscribe((videos) => {
            this.recentUploadedVideos = this.recentUploadedVideos.concat(videos);
          });
    }
}

enum SelectedTab {
    recent, popular
}