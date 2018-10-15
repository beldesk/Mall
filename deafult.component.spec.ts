import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeafultComponent } from './deafult.component';

describe('DeafultComponent', () => {
  let component: DeafultComponent;
  let fixture: ComponentFixture<DeafultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeafultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeafultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
