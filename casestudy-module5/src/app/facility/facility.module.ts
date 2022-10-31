import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FacilityRoutingModule} from './facility-routing.module';
import {UpdateFacilityComponent} from './update-facility/update-facility.component';
import {CreateFacilityComponent} from './create-facility/create-facility.component';
import {FacilityListComponent} from './facility-list/facility-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [UpdateFacilityComponent, CreateFacilityComponent, FacilityListComponent],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FacilityModule {
}
