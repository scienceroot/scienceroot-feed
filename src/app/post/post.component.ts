import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  template: `
    <div style="padding: 24px;">
      <scr-post-create>
      </scr-post-create>
    </div>
  `,
  styles: []
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
