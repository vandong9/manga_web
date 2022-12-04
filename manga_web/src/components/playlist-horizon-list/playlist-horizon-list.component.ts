import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { VideoService } from 'src/services/video.service';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { IPlaylist } from 'src/models/playlist';

@Component({
  selector: 'playlist-horizon-list',
  templateUrl: 'playlist-horizon-list.component.html',
})
export class PlaylistHorizonListComponent implements AfterViewInit, OnDestroy {
  @Input() isShowChannel: Boolean = true;
  @Input() numOfColumn: number = 4;
  @Input() playlists: IPlaylist[] = [];
  destroy = new Subject();

  @ViewChild('ItemContainer') itemContainer?: ElementRef;
  hideBackButton: boolean = true;
  hideNextButton: boolean = false;
  constructor() {
    // .subscribe((e: Event) => console.log(this.getYPosition(e)));
  }

  ngAfterViewInit() {
    let element = this.itemContainer?.nativeElement;
    this.hideNextButton = element.scrollWidth - element.scrollLeft - element.clientWidth < 220;

    fromEvent(this.itemContainer?.nativeElement, 'scroll')
      .pipe(takeUntil(this.destroy))
      .subscribe((event) => {
        let e = event as Event;
        this.updateSCrollState(e);
      });
  }

  ngOnDestroy(): void {
    this.destroy.next('');
  }
  // FUNCITONS

  updateSCrollState(e: Event) {
    let element = e.target as Element;
    this.hideBackButton = element.scrollLeft < 220;
    this.hideNextButton =
      element.scrollWidth - element.scrollLeft - element.clientWidth < 220;
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
