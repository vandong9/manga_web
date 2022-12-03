import { Component, Input, OnInit } from '@angular/core';
import { CategoryContentType, Category } from 'src/models/category';
import { IChannelModel } from 'src/models/channel';
import { IPlaylist } from 'src/models/playlist';
import { IVideoLinkItem } from 'src/models/video-link-item';
import { ChannelDetailService } from 'src/services/channel-detail.service';

@Component({
  selector: 'channel-home',
  templateUrl: 'channel-home.component.html',
})
export class ChannelHomeComponent implements OnInit {
  @Input() channelID: String = '';
  categories: Category[] = [];
  CategoryContentType = CategoryContentType;
  constructor(private channelService: ChannelDetailService) {}

  ngOnInit(): void {
    this.channelService
      .getDetailOfChannel(this.channelID)
      .subscribe((categories) => {
        this.categories = this.categories.concat(categories);
        console.log('get home categories');
        console.log(this.categories.length);
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
