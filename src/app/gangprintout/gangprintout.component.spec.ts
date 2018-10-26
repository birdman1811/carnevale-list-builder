import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GangprintoutComponent } from './gangprintout.component';

describe('GangprintoutComponent', () => {
  let component: GangprintoutComponent;
  let fixture: ComponentFixture<GangprintoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GangprintoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GangprintoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
