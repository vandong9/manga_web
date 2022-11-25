import { IChannelModel } from "./channel";

export interface IVideoDetailModel {
    id: String;
    tag: String;
    name: String;
    playerLink: String;
    publish: String;
    channelModel: IChannelModel;
    views: String;
    likes: String;
    description: String
  }