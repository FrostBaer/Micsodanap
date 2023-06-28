import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeisureComponent } from './leisure.component';

describe('LeisureComponent', () => {
  let component: LeisureComponent;
  let fixture: ComponentFixture<LeisureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeisureComponent]
    });
    fixture = TestBed.createComponent(LeisureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
