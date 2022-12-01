import { IChannelModel } from './channel';

export interface IVideoLinkItem {
  image: String;
  title: String;
  channel: IChannelModel;
  viewCount: String;
  uploadedTime: String;
}
