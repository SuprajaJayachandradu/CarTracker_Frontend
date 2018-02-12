import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleAlertlistComponent } from './vehicle-alertlist.component';

describe('VehicleAlertlistComponent', () => {
  let component: VehicleAlertlistComponent;
  let fixture: ComponentFixture<VehicleAlertlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleAlertlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleAlertlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
