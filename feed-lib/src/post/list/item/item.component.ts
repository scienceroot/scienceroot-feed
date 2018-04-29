import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ScrPost} from '../../core/post.model';

@Component({
  selector: 'scr-post-list-item',
  template: `
    <div class="post">
      <div  class="mat-body-1"
            [innerHtml]="post.contentAsHtml">
      </div>
      <div fxLayout="row">
        <div  fxFlex=""
              class="mat-caption meta-info scr-primary-text">
          <span>by</span>
          <a  [routerLink]="['/user', post.creator.uid]">
            <span>{{post.creator.forename}} {{post.creator.lastname}}</span>
          </a>
        </div>
        <div fxFlex="100px">
          <ng-container *ngIf="post.creator.uid === activeUserId">
            <button mat-button=""
                    color="accent"
                    (click)="deletePost()">
              Delete
            </button>
          </ng-container>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .post {
      padding: 12px 24px;
    }
    
    .post .meta-info {
      padding: 8px 0;
    }
  `]
})
export class ScrPostListItemComponent {

  @Input() activeUserId: string;
  @Input() post: ScrPost;

  @Output() onDelete: EventEmitter<ScrPost> = new EventEmitter();

  constructor() {

  }

  public deletePost() {
    this.onDelete.emit(this.post);
  }
}
