import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {CustomerListComponent} from './component/customer/customer-list/customer-list.component';
import {CustomerAddComponent} from './component/customer/customer-add/customer-add.component';
import {CustomerUpdateComponent} from './component/customer/customer-update/customer-update.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'customer/list',component: CustomerListComponent},
  {path:'customer/create',component: CustomerAddComponent},
  {path:'customer/update/:id',component: CustomerUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
