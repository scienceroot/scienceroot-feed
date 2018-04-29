import {NgModule} from '@angular/core';
import {ScrPostListComponent} from './list.component';
import {CommonModule} from '@angular/common';
import {MatDividerModule} from '@angular/material';
import {ScrPostListItemModule} from './item/item.module';

@NgModule({
  imports: [
    CommonModule,
    MatDividerModule,
    ScrPostListItemModule
  ],
  declarations: [
    ScrPostListComponent
  ],
  exports: [
    ScrPostListComponent
  ],
  providers: []
})
export class ScrPostListModule {

}
