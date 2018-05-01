import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionFeedComponent } from './collection-feed.component';

describe('CollectionFeedComponent', () => {
  let component: CollectionFeedComponent;
  let fixture: ComponentFixture<CollectionFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
