export interface ICommentModel {
    id: String
    level: number
    ownerID: String
    ownerName: String
    ownerAvatar: String
    comment: String
    postDate: String
    likes: String  
    disLikes: String
    replies: ICommentModel[]
  }