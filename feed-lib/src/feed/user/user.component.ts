import {Component, Input, OnInit} from '@angular/core';
import {ScrPostService} from '../../post/core/post.service';
import {ScrPost} from '../../post/core/post.model';

@Component({
  selector: 'scr-feed-user',
  template: `
    <div>
      <scr-loading [waitFor]="postsReq">
        <div onFinish>
          <ng-container *ngIf="!!posts">
            <scr-post-list [posts]="posts">
            </scr-post-list>
          </ng-container>
        </div>
      </scr-loading>
    </div>
  `,
  styles: [`
  
  `]
})
export class ScrFeedUserComponent implements OnInit {

  @Input() userId: string;

  public postsReq: Promise<ScrPost[]>;
  public posts: ScrPost[];

  constructor(private _postService: ScrPostService) {

  }

  ngOnInit(): void {
    this.postsReq = this._postService.getByUserId(this.userId);
    this.postsReq.then(posts => this.posts = posts);
  }
}
