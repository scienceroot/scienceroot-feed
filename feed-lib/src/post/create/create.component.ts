import {Component, EventEmitter, Output} from '@angular/core';
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
                    [(ngModel)]="post.content"
                    placeholder="What do you want to share?"></textarea>
        </mat-form-field>
      </div>
      <div class="actions"
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
      height: 50px;
      transition: height 200ms ease-out;
    }

    .textarea-container .mat-focused  textarea {
      height: 150px;
      transition: height 200ms ease-in;
    }
  `]
})
export class ScrPostCreateComponent {

  @Output() onSave: EventEmitter<ScrPost> = new EventEmitter();

  public post: ScrPost;
  public error: string | null;

  private readonly _activeUser: ScrUser;

  constructor(
    private _postService: ScrPostService,
    private _activeUserService: ScrActiveUserService
  ) {
    this._activeUser = this._activeUserService.get();
    this._initPost();
  }

  public save() {
    const postError = this.post.hasError();

    if (!postError) {
      this.error = null;
      this._postService.create(this.post)
        .then(post => this._onSaveSuccess(post));
    } else {
      this.error = postError;
    }
  }

  private _onSaveSuccess(post: ScrPost) {
    this._initPost();
    this.onSave.emit(post);
  }

  private _initPost() {
    this.post = new ScrPost(this._activeUser);
  }
}
