import { IChannelModel } from './channel';

export interface VideoLinkItem {
  image: String;
  title: String;
  channel: IChannelModel;
  channelName: string;
  channelAvatar: String;
  viewCount: String;
  uploadedTime: String;
}
