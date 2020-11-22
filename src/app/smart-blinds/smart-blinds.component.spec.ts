import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartBlindsComponent } from './smart-blinds.component';

describe('SmartBlindsComponent', () => {
  let component: SmartBlindsComponent;
  let fixture: ComponentFixture<SmartBlindsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartBlindsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartBlindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
