import { Component, OnInit } from '@angular/core';
import {ScrActiveUserService} from '@scienceroot/user';

@Component({
  selector: 'app-user-feed',
  template: `
    <scr-feed-user [userId]="activeUserId">
    </scr-feed-user>
  `,
  styles: []
})
export class UserFeedComponent implements OnInit {

  public activeUserId: string;

  constructor(private _activeUserService: ScrActiveUserService) {
    this.activeUserId = this._activeUserService.get().uid;
  }

  ngOnInit() {
  }

}
