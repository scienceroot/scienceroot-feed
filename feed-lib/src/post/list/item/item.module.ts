import {NgModule} from '@angular/core';
import {ScrPostListItemComponent} from './item.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    ScrPostListItemComponent
  ],
  exports: [
    ScrPostListItemComponent
  ],
  providers: []
})
export class ScrPostListItemModule {

}
