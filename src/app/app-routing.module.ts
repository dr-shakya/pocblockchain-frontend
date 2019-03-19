import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'customer',
    loadChildren: './customer/customer.module#CustomerModule'
  },
  {
    path: 'bank',
    loadChildren: './bank/bank.module#BankModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
