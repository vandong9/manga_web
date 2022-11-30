import { IChannelModel } from './channel';

export interface VideoLinkItem {
  image: String;
  title: String;
  channel: IChannelModel;
  viewCount: String;
  uploadedTime: String;
}
