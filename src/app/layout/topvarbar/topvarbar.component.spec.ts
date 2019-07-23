import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopvarbarComponent } from './topvarbar.component';

describe('TopvarbarComponent', () => {
  let component: TopvarbarComponent;
  let fixture: ComponentFixture<TopvarbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopvarbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopvarbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
