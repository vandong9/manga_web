import { IVideoLinkItem } from './video-link-item';

export class Category {
  name: String = '';
  description: string = '';
  type: String = '';
  items: Object[] = [];
  enumType: CategoryContentType = CategoryContentType.video;

  getValueForEnumType(): CategoryContentType | undefined {
    let getType: CategoryContentType | undefined = undefined;
    switch (this.type) {
      case 'video':
        getType = CategoryContentType.video;
        break;
      case 'playlist':
        getType = CategoryContentType.playlist;
        break;
      case 'short':
        getType = CategoryContentType.short;
        break;
      case 'channel':
        getType = CategoryContentType.channel;
        break;
    }
    return getType;
  }

  toVideos(): IVideoLinkItem[] {
    return this.items.map((item) => item as IVideoLinkItem);
  }
}

export enum CategoryContentType {
  video,
  playlist,
  short,
  channel,
}
