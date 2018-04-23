import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostComponent} from './post.component';
import {ScrPostCreateModule} from '@scienceroot/feed';
import {RouterModule} from '@angular/router';
import {ScrAuthenticationGuard} from '@scienceroot/security';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'posts', component: PostComponent, canActivate: [ScrAuthenticationGuard]}
    ]),
    ScrPostCreateModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [PostComponent]
})
export class PostModule {
}
