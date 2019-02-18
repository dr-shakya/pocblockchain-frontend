import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddBankComponent } from './bank/add-bank/add-bank.component';
import { AddCustomerComponent } from './bank/add-customer/add-customer.component';
import { VerifyComponent } from './bank/verify/verify.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { RequestComponent } from './customer/request/request.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBankComponent,
    AddCustomerComponent,
    VerifyComponent,
    CustomerDetailComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
