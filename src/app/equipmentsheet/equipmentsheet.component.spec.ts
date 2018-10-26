import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsheetComponent } from './equipmentsheet.component';

describe('EquipmentsheetComponent', () => {
  let component: EquipmentsheetComponent;
  let fixture: ComponentFixture<EquipmentsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
