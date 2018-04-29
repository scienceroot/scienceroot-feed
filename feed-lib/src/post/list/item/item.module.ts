import {NgModule} from '@angular/core';
import {ScrPostListItemComponent} from './item.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule
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
