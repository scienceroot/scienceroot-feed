import {NgModule} from '@angular/core';
import {ScrFeedUserComponent} from './user.component';
import {CommonModule} from '@angular/common';
import {ScrPostCoreModule} from '../../post/core/core.module';
import {ScrLoadingModule} from '@scienceroot/design';
import {ScrPostListModule} from '../../post/list/list.module';
import {ScrPostCreateModule} from '../../post/create/create.module';

@NgModule({
  imports: [
    CommonModule,
    ScrLoadingModule,
    ScrPostCoreModule,
    ScrPostCreateModule,
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
