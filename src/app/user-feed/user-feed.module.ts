import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFeedComponent } from './user-feed.component';
import {ScrAuthenticationGuard} from '@scienceroot/security';
import {RouterModule} from '@angular/router';
import {ScrFeedUserModule} from '@scienceroot/feed';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'user-feed',
        component: UserFeedComponent,
        canActivate: [ScrAuthenticationGuard]
      }
    ]),
    ScrFeedUserModule
  ],
  declarations: [UserFeedComponent],
  exports: [
    RouterModule
  ]
})
export class UserFeedModule { }
