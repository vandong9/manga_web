import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { IVideoLinkItem } from 'src/models/video-link-item';
import { VideoService } from 'src/services/video.service';
import { Category, CategoryContentType } from 'src/models/category';
import { ChannelDetailService } from 'src/services/channel-detail.service';
import { IPlaylist } from 'src/models/playlist';
import { IChannelModel } from 'src/models/channel';

@Component({
  selector: 'home-module',
  templateUrl: 'home.module.html',
})
export class HomePageComponent {
  toggle: Boolean = false;
  channelID: String = '';
  categories: Category[] = [];
  CategoryContentType = CategoryContentType;

  listenToggleHambegerEmit(event: any) {
    console.log(event);
    this.toggle = !this.toggle;
  }

  constructor(private channelService: ChannelDetailService) {}

  ngOnInit(): void {
    this.channelService
      .getUserHomeData(this.channelID)
      .subscribe((categories) => {
        this.categories = this.categories.concat(categories);
      });
  }

  getVideosForCateAtIndex(index: number): IVideoLinkItem[] {
    let cate: Category = this.categories[index];
    return cate.items.map((item) => item as IVideoLinkItem);
  }

  getPlaylistForCateAtIndex(index: number): IPlaylist[] {
    let cate: Category = this.categories[index];
    return cate.items.map((item) => item as IPlaylist);
  }

  getShortForCateAtIndex(index: number): IVideoLinkItem[] {
    let cate: Category = this.categories[index];
    return cate.items.map((item) => item as IVideoLinkItem);
  }

  getChannelForCateAtIndex(index: number): IChannelModel[] {
    let cate: Category = this.categories[index];
    return cate.items.map((item) => item as IChannelModel);
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
