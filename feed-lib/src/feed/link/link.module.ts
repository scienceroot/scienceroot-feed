import {NgModule} from '@angular/core';
import {ScrCollectionFeedLinkComponent} from './link.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatIconModule
  ],
  declarations: [
    ScrCollectionFeedLinkComponent
  ],
  exports: [
    ScrCollectionFeedLinkComponent
  ],
  providers: []
})
export class ScrCollectionFeedLinkModule {

}
