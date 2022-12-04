import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { IVideoLinkItem } from '../../models/video-link-item';
import { VideoService } from 'src/services/video.service';
import { fromEvent, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'tag-horizon-list',
  templateUrl: 'tag-horizon-list.component.html',
})
export class TagHorizonListComponent implements AfterViewInit, OnDestroy {
  @Input() tags: String[] = [];
  destroy = new Subject();

  @ViewChild('ItemContainer') itemContainer?: ElementRef;
  hideBackButton: boolean = true;
  hideNextButton: boolean = false;
  detectScrollWidth: number = 50;
  constructor() {
    // .subscribe((e: Event) => console.log(this.getYPosition(e)));
  }

  ngAfterViewInit() {
    let element = this.itemContainer?.nativeElement;
    this.hideNextButton =
      element.scrollWidth - element.scrollLeft - element.clientWidth <
      this.detectScrollWidth;

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
    this.hideBackButton = element.scrollLeft < this.detectScrollWidth;
    this.hideNextButton =
      element.scrollWidth - element.scrollLeft - element.clientWidth <
      this.detectScrollWidth;
  }

  onClickLeft() {
    if (this.itemContainer != null) {
      this.itemContainer.nativeElement.scrollLeft -= 100;
    }
  }

  onClickRight() {
    if (this.itemContainer != null) {
      this.itemContainer.nativeElement.scrollLeft += 100;
    }
  }
}
