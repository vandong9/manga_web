import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IChannelModel } from 'src/models/channel';

@Component({
  selector: 'channel-avatar',
  template: ` <img
    src="{{ channel?.avatar ?? '' }}"
    style="border-radius: 50%; width:
    100%; height: 100%;" 
    (click)="onClick()"
  />`,
})
export class ChannelAvatarComponent {
  @Input() channel?: IChannelModel;

  constructor(private _router: Router) {}

  onClick() {
    if (this.channel != null) {
      console.log(this.channel);
      this._router.navigate(['/channel', this.channel.id]);
      //   this._router.navigateByUrl('/channnel/' + this.channel.id);
    }
  }
}
