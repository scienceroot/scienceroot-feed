import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CollectionFeedComponent} from './collection-feed.component';
import {ScrFeedCollectionModule} from '@scienceroot/feed';
import {RouterModule} from '@angular/router';
import {ScrAuthenticationGuard} from '@scienceroot/security';
import {ScrActiveUserModule} from '@scienceroot/user';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'collection',
        component: CollectionFeedComponent,
        canActivate: [ScrAuthenticationGuard]}
    ]),
    ScrActiveUserModule,
    ScrFeedCollectionModule
  ],
  declarations: [CollectionFeedComponent],
  exports: [
    RouterModule
  ]
})
export class CollectionFeedModule {
}
