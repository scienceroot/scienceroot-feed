import {Component, Input, OnInit} from '@angular/core';
import {ScrPost} from '../../post/core/post.model';
import {ScrPostService} from '../../post/core/post.service';

@Component({
  selector: 'scr-feed-collection',
  template: `
    <div>
      <scr-post-create  [activeUser]="activeUser"
                        (onSave)="onPostSaved($event)">
      </scr-post-create>
    </div>
    <div>
      <scr-loading [waitFor]="postsReq">
        <div onFinish>
          <ng-container *ngIf="!!posts">
            <scr-post-list  [posts]="posts"
                            [activeUserId]="activeUser.uid">
            </scr-post-list>
          </ng-container>
        </div>
      </scr-loading>
    </div>
  `,
  styles: [`
  
  `]
})
export class ScrFeedCollectionComponent implements OnInit {

  @Input() activeUser: any;

  public postsReq: Promise<ScrPost[]>;
  public posts: ScrPost[];

  constructor(
    private _postService: ScrPostService
  ) {

  }

  ngOnInit(): void {
    this.postsReq = this._postService.getFeed(this.activeUser.uid);
    this.postsReq.then(posts => this.posts = posts);
  }

  public onPostSaved(newPost: ScrPost) {
    this.posts.push(newPost);
  }
}
