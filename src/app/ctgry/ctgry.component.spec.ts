import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtgryComponent } from './ctgry.component';

describe('CtgryComponent', () => {
  let component: CtgryComponent;
  let fixture: ComponentFixture<CtgryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtgryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtgryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
