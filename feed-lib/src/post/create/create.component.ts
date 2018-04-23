import {Component} from '@angular/core';
import {ScrPostService} from '../core/post.service';
import {ScrPost} from '../core/post.model';
import {ScrActiveUserService, ScrUser} from '@scienceroot/user';

@Component({
  selector: 'scr-post-create',
  template: `
    <div>
      <div class="error">
        <span class="mat-error">{{error}}</span>
      </div>
      <div class="textarea-container">
        <mat-form-field>
          <textarea matInput=""
                    [(ngModel)]="post.text"
                    placeholder="What do you want to share?"></textarea>
        </mat-form-field>
      </div>
      <div  class="actions"
            fxLayout="row"
            fxLayoutAlign="end">
        <div fxFlex="75px">
          <button mat-raised-button=""
                  color="accent"
                  (click)="save()">
            Save
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .textarea-container, mat-form-field {
      width: 100%;
    }

    .textarea-container textarea {
      width: 100%;
      min-height: 250px;
    }
  `]
})
export class ScrPostCreateComponent {

  public post: ScrPost;
  public error: string | null;

  constructor(
    private _postService: ScrPostService,
    private _activeUserService: ScrActiveUserService
  ) {
    const activeUser = this._activeUserService.get();
    this.post = new ScrPost(activeUser);
  }

  public save() {
    const postError = this.post.hasError();

    if (!postError) {
      this.error = null;
      this._postService.create(this.post);
    } else {
      this.error = postError;
    }
  }
}
