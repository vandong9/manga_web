import { IVideoLinkItem } from "./video-link-item"

export interface IPlaylist {
    id: String
    name: String
    image: String
    videoCount: string
    videos: IVideoLinkItem[]
}