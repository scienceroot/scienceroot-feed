import {NgModule} from '@angular/core';
import {ScrPostCreateComponent} from './create.component';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ScrPostCoreModule} from '../core/core.module';
import {FormsModule} from '@angular/forms';

export * from './create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    ScrPostCoreModule
  ],
  declarations: [
    ScrPostCreateComponent
  ],
  exports: [
    ScrPostCreateComponent
  ],
  providers: []
})
export class ScrPostCreateModule {

}
