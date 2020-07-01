import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppClassStyleComponent } from './app-class-style.component';

describe('AppClassStyleComponent', () => {
  let component: AppClassStyleComponent;
  let fixture: ComponentFixture<AppClassStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppClassStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppClassStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
