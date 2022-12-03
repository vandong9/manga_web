import { IChannelModel } from './channel';

export interface ICommentModel {
  id: String;
  level: number;
  channel: IChannelModel;
  comment: String;
  postDate: String;
  likes: String;
  disLikes: String;
  replies: ICommentModel[];
}
