import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactionSelectComponent } from './faction-select.component';

describe('FactionSelectComponent', () => {
  let component: FactionSelectComponent;
  let fixture: ComponentFixture<FactionSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactionSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactionSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
