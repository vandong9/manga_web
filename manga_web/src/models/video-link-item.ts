import { IChannelModel } from './channel';

export interface IVideoLinkItem {
  id: String;
  image: String;
  title: String;
  channel: IChannelModel;
  viewCount: String;
  uploadedTime: String;
  type: String;
}
