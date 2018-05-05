import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'scr-collection-feed-link',
  template: `
    <div  class="link"
          [routerLink]="['/collection']"
          [ngClass]="{
            'active': isActive
          }">
      <div class="content">
        <div  fxLayout="row"
              fxLayoutAlign="center">
          <div fxFlex="24px">
            <mat-icon>inbox</mat-icon>
          </div>
        </div>
        <div class="text">
          <span class="">Newsfeed</span>
        </div>
      </div>
      <div class="highlight-bar">
      </div>
    </div>
  `,
  styles: [`
    .link {
      cursor: pointer;
      height: 64px;
      outline: none;
      color: #fff;
    }

    .link .content {
      height: 40px;
      padding: 10px 0;
    }
    
    .link .content .text { 
      text-align: center;
      text-transform: uppercase;
      font-size: 10px;
    }
    
    .link .highlight-bar { 
      display: none;
      height: 4px;
      background-color: #fff;
    }
    
    .link.active .highlight-bar { display: block; }
  `]
})
export class ScrCollectionFeedLinkComponent {

  public isActive: boolean = false;

  constructor(
    private _router: Router
  ) {
    this._router.events.subscribe(e => {
      this.isActive = e instanceof NavigationEnd && e.url === '/collection';
    });
  }
}
