import {Component, Input, OnInit} from '@angular/core';
import {ScrPostService} from '../../post/core/post.service';
import {ScrPost} from '../../post/core/post.model';
import {ScrActiveUserService, ScrUser} from '@scienceroot/user';

@Component({
  selector: 'scr-feed-user',
  template: `
    <div>
      <ng-container *ngIf="userId === activeUser.uid">
        <scr-post-create (onSave)="onPostSaved($event)">
        </scr-post-create>
      </ng-container>
    </div>
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

  public activeUser: ScrUser;

  public postsReq: Promise<ScrPost[]>;
  public posts: ScrPost[];

  constructor(
    private _postService: ScrPostService,
    private _activeUserService: ScrActiveUserService
  ) {
    this.activeUser = this._activeUserService.get();
  }

  ngOnInit(): void {
    this.postsReq = this._postService.getByUserId(this.userId);
    this.postsReq.then(posts => this.posts = posts);
  }

  public onPostSaved(newPost: ScrPost) {
    this.posts.push(newPost);
  }
}
