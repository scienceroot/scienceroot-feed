import {Component, Input, OnInit} from '@angular/core';
import {ScrPostService} from '../../post/core/post.service';
import {ScrPost} from '../../post/core/post.model';

@Component({
  selector: 'scr-feed-user',
  template: `
    <div>
      <ng-container *ngIf="userId === activeUser.uid">
        <scr-post-create  [activeUser]="activeUser"
                          (onSave)="onPostSaved($event)">
        </scr-post-create>
      </ng-container>
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
export class ScrFeedUserComponent implements OnInit {

  @Input() userId: string;
  @Input() activeUser: any;


  public postsReq: Promise<ScrPost[]>;
  public posts: ScrPost[];

  constructor(private _postService: ScrPostService) {
  }

  ngOnInit(): void {
    this.postsReq = this._postService.getByUserId(this.userId);
    this.postsReq.then(posts => this.posts = posts);
  }

  public onPostSaved(newPost: ScrPost) {
    this.posts.push(newPost);
  }
}
