import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {UpdateCustomerComponent} from './update-customer/update-customer.component';


const routes: Routes = [
  {path: 'list', component: CustomerListComponent},
  {path: 'create', component: CreateCustomerComponent},
  {path: 'update/:id', component: UpdateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
