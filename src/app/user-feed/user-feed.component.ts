import { Component, OnInit } from '@angular/core';
import {ScrActiveUserService, ScrUser} from '@scienceroot/user';

@Component({
  selector: 'app-user-feed',
  template: `
    <scr-feed-user  [userId]="activeUser.uid"
                    [activeUser]="activeUser">
    </scr-feed-user>
  `,
  styles: []
})
export class UserFeedComponent implements OnInit {

  public activeUser: ScrUser;

  constructor(private _activeUserService: ScrActiveUserService) {
    this.activeUser = this._activeUserService.get();
    console.log(this.activeUser)
  }

  ngOnInit() {
  }

}
