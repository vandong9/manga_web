import { IChannelModel } from './channel';

export interface ICommunityModel {
  id: String;
  channel: IChannelModel;
  uploadedDate: string;
  scriptContent: String;
  fullContent: String;
  image: string;
}
