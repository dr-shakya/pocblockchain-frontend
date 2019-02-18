import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBankComponent } from './bank/add-bank/add-bank.component';
import { AddCustomerComponent } from './bank/add-customer/add-customer.component';
import { VerifyComponent } from './bank/verify/verify.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { RequestComponent } from './customer/request/request.component';

const routes: Routes = [
  { path: 'bank', component: AddBankComponent },
  { path: 'bank/customer', component: AddCustomerComponent },
  { path: 'bank/verify', component: VerifyComponent},
  { path: 'customer', component: CustomerDetailComponent},
  { path: 'customer/request', component: RequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
