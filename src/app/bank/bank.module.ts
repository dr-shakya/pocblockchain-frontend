import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankRoutingModule } from './bank-routing.module';
import { AddBankComponent } from './add-bank/add-bank.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { VerifyComponent } from './verify/verify.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddBankComponent, AddCustomerComponent, VerifyComponent],
  imports: [
    CommonModule,
    BankRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BankModule { }
