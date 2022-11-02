import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { UpdateComponent } from './save-book/update/update.component';
import { ListComponent } from './save-book/list/list.component';
import { CreateComponent } from './save-book/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
    ListComponent,
    CreateComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
