import {Component, Input} from '@angular/core';
import {ScrPost} from '../../core/post.model';

@Component({
  selector: 'scr-post-list-item',
  template: `
    <div class="post">
      <div  class="mat-body-1"
            [innerHtml]="post.contentAsHtml">
      </div>
      <div class="mat-caption meta-info scr-primary-text">
        <span>by</span>
        <a  [routerLink]="['/user', post.creator.uid]">
          <span>{{post.creator.forename}} {{post.creator.lastname}}</span>
        </a>
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

  @Input() post: ScrPost;
}
