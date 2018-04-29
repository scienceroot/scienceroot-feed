import {NgModule} from '@angular/core';
import {ScrFeedUserComponent} from './user.component';
import {CommonModule} from '@angular/common';
import {ScrPostCoreModule} from '../../post/core/core.module';
import {ScrLoadingModule} from '@scienceroot/design';
import {ScrPostListModule} from '../../post/list/list.module';

@NgModule({
  imports: [
    CommonModule,
    ScrLoadingModule,
    ScrPostCoreModule,
    ScrPostListModule
  ],
  declarations: [
    ScrFeedUserComponent
  ],
  exports: [
    ScrFeedUserComponent
  ],
  providers: []
})
export class ScrFeedUserModule {

}
