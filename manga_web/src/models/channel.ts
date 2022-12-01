export interface IChannelModel {
    id: String;
    name: String;
    avatar: String;
    subcriberscount: Number;
    subcribers: string;
  }
  export interface IChannelCategory {
    name: String
    channels: IChannelModel[]
}