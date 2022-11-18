import { Component } from '@angular/core';

@Component({
  selector: 'list-video',
  template: `
    <ng-container *ngFor="for; clip: of; videoLinks">
      <card-video [video]="clip"></card-video>
    </ng-container>
  `,
})
export class ListVideoComponent {
  videoLinks: VideoLinkItem[] = [];
}
