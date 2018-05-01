import { Component, OnInit } from '@angular/core';
import {ScrActiveUserService, ScrUser} from '@scienceroot/user';

@Component({
  selector: 'app-collection-feed',
  template: `
    <scr-feed-collection [activeUser]="activeUser">
    </scr-feed-collection>
  `,
  styles: []
})
export class CollectionFeedComponent implements OnInit {

  public activeUser: ScrUser;

  constructor(private _activeUserService: ScrActiveUserService) {
    this.activeUser = this._activeUserService.get();
  }

  ngOnInit() {
  }

}
