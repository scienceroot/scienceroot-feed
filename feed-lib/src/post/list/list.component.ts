import {Component, Input} from '@angular/core';
import {ScrPost} from '../core/post.model';

@Component({
  selector: 'scr-post-list',
  template: `
    <div>
      <ng-container *ngIf="posts.length > 0; then list else empty;">
      </ng-container>
    </div>

    <ng-template #empty>
      <div class="mat-body-1">
        <span>No posts were found.</span>
      </div>
    </ng-template>

    <ng-template #list>
      <div>
        <ng-container *ngFor="let post of posts.reverse()">
          <scr-post-list-item [post]="post">
          </scr-post-list-item>
          <mat-divider></mat-divider>
        </ng-container>
      </div>
    </ng-template>
  `,
  styles: [`
  
  `]
})
export class ScrPostListComponent {

  @Input() posts: ScrPost[];
}
