import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './main-home/header/header.component';
import {FooterComponent} from './main-home/footer/footer.component';
import {HomeComponent} from './main-home/home/home.component';
import {CreateFacilityComponent} from './facility/create-facility/create-facility.component';
import {UpdateFacilityComponent} from './facility/update-facility/update-facility.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CreateCustomerComponent} from './customer/create-customer/create-customer.component';
import {UpdateCustomerComponent} from './customer/update-customer/update-customer.component';
import {CreateContractComponent} from './contract/create-contract/create-contract.component';
import {ContractListComponent} from './contract/contract-list/contract-list.component';
import {FacilityListComponent} from './facility/facility-list/facility-list.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ContractModule} from './contract/contract.module';
import {CustomerModule} from './customer/customer.module';
import {FacilityModule} from './facility/facility.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ContractModule,
    CustomerModule,
    FacilityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
