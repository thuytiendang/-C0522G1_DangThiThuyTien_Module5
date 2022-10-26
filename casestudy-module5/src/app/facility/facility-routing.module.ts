import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityListComponent} from './facility-list/facility-list.component';
import {CreateFacilityComponent} from './create-facility/create-facility.component';
import {UpdateFacilityComponent} from './update-facility/update-facility.component';


const routes: Routes = [
  {path: 'list', component: FacilityListComponent},
  {path: 'create', component: CreateFacilityComponent},
  {path: 'update/:id', component: UpdateFacilityComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
