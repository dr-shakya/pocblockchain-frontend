import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { RequestComponent } from './request/request.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerDetailComponent
  },
  {
    path: 'request',
    component: RequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
