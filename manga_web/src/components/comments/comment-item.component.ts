import { Component, Input } from "@angular/core";
import { ICommentModel } from "src/models/comment";

@Component({
    selector: 'comment-item',
    templateUrl:'comment-item.component.html'
})
export class CommentItemComponent {
    @Input() comment!: ICommentModel
}