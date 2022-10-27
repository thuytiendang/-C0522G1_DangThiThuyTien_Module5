import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServiceListComponent } from './component/facility/service-list/service-list.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { ServiceUpdateComponent } from './component/facility/service-update/service-update.component';
import { ServiceAddComponent } from './component/facility/service-add/service-add.component';
import { CustomerListComponent } from './component/customer/customer-list/customer-list.component';
import { CustomerAddComponent } from './component/customer/customer-add/customer-add.component';
import { CustomerUpdateComponent } from './component/customer/customer-update/customer-update.component';
import { ContractListComponent } from './component/contract/contract-list/contract-list.component';
import { ContractAddComponent } from './component/contract/contract-add/contract-add.component';
import {AppRoutingModule} from './app--routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ServiceListComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ServiceUpdateComponent,
    ServiceAddComponent,
    CustomerListComponent,
    CustomerAddComponent,
    CustomerUpdateComponent,
    ContractListComponent,
    ContractAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:2000,
      positionClass:'toast-top-center',
      tapToDismiss: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
