import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { IVideoLinkItem } from '../../models/video-link-item';
import { VideoService } from 'src/services/video.service';

@Component({
  selector: 'video-horizon-list',
  templateUrl: 'video-horizon-list.component.html',
})
export class VideoHorizonListComponent implements AfterViewInit {
  @Input() isShowChannel: Boolean = true;
  @Input() numOfColumn: number = 4;
  @Input() videoLinks: IVideoLinkItem[] = [];

  @ViewChild('ItemContainer') itemContainer?: ElementRef;

  getValue() {
    console.log(this.itemContainer);
  }

  ngAfterViewInit() {
    console.log(this.itemContainer?.nativeElement.innerHTML);
  }
  onClickLeft() {
    if (this.itemContainer != null) {
      this.itemContainer.nativeElement.scrollLeft -= 200;
    }
  }

  onClickRight() {
    if (this.itemContainer != null) {
      this.itemContainer.nativeElement.scrollLeft += 200;
    }
  }
}
