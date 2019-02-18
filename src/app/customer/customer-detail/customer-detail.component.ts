import { Component, OnInit } from '@angular/core';
import { CustomerInfo } from '../models/customer-info';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customerInfo: CustomerInfo;
  customerDetailForm: FormGroup;
  customerBalanceForm: FormGroup;
  balance: number;

  constructor(
    private customerService: CustomerService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.customerDetailForm = this.formBuilder.group({
      customerName: [null]
    });
    this.customerBalanceForm = this.formBuilder.group({
      customerName: [null]
    });
  }

  getCustomer(): void {
    this.customerService.getCustomer(this.customerDetailForm.controls['customerName'].value).subscribe(data => {
      this.customerInfo = data;
    });
  }

  getBalance(): void {
    this.customerService.getBalance(this.customerBalanceForm.controls['customerName'].value).subscribe(data => {
      this.balance = data;
    });
  }

}
