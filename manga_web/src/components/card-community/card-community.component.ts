import { Component, Input } from '@angular/core';
import { ICommunityModel } from 'src/models/community';

@Component({
  selector: 'card-community',
  templateUrl: 'card-community.component.html',
})
export class CardCommunityComponent {
  @Input() communityModel!: ICommunityModel;
}
