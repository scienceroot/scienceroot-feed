import {NgModule} from '@angular/core';
import {ScrFeedCollectionComponent} from './collection.component';
import {CommonModule} from '@angular/common';
import {ScrPostCoreModule} from '../../post/core/core.module';
import {ScrPostCreateModule} from '../../post/create/create.module';
import {ScrLoadingModule} from '@scienceroot/design';
import {ScrPostListModule} from '../../post/list/list.module';

@NgModule({
  imports: [
    CommonModule,
    ScrLoadingModule,
    ScrPostCoreModule,
    ScrPostCreateModule,
    ScrPostListModule
  ],
  declarations: [
    ScrFeedCollectionComponent
  ],
  exports: [
    ScrFeedCollectionComponent
  ],
  providers: []
})
export class ScrFeedCollectionModule {

}
