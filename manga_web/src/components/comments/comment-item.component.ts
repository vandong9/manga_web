import { Component, Input } from '@angular/core';
import { Constant } from 'src/common/constant';
import { ICommentModel } from 'src/models/comment';

@Component({
  selector: 'comment-item',
  templateUrl: 'comment-item.component.html',
})
export class CommentItemComponent {
  @Input() comment!: ICommentModel;
  Constant = Constant;
}
