import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBankComponent } from './add-bank/add-bank.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
  { path: '', component: AddBankComponent },
  { path: 'customer', component: AddCustomerComponent },
  { path: 'verify', component: VerifyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankRoutingModule { }
