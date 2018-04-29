import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PostModule} from './post/post.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {
  ScrAuthenticationLoginComponent,
  ScrAuthenticationModule,
  ScrAuthenticationStoreConfig,
  ScrSecureHttpClientModule
} from '@scienceroot/security';
import {ScrFeedStoreConfig} from '@scienceroot/feed';
import {ScrUserDetailsLinkModule, ScrUserStoreConfigModel} from '@scienceroot/user';
import {FlexLayoutModule} from '@angular/flex-layout';
import {UserFeedModule} from './user-feed/user-feed.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo: 'posts'},
      {path: 'login', component: ScrAuthenticationLoginComponent}
    ]),
    FlexLayoutModule,
    ScrAuthenticationModule,
    ScrSecureHttpClientModule,
    ScrUserDetailsLinkModule,
    PostModule,
    UserFeedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    const host: string = 'https://api.scienceroots.com';

    new ScrFeedStoreConfig(`${host}/posts/`).save();
    new ScrAuthenticationStoreConfig(
      'scrAuthToken',
      `${host}/register`,
      `${host}/login`,
      `${host}/token`,
    ).save();
    new ScrUserStoreConfigModel(
      `${host}/users`,
      `${host}/register`,
      `${host}/industries/`,
      `${host}/interests/`,
      `${host}/search/languages/`
    ).save();
  }
}
