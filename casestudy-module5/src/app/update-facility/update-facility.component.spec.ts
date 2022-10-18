import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFacilityComponent } from './update-facility.component';

describe('UpdateFacilityComponent', () => {
  let component: UpdateFacilityComponent;
  let fixture: ComponentFixture<UpdateFacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
