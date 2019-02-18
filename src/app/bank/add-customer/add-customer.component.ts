import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BankService } from '../bank.service';
import { Customer } from '../model/customer';
import { TransactionReceipt } from '../model/transaction-receipt';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  customerForm: FormGroup;
  transactionReceipt: TransactionReceipt;

  constructor(
    private bankService: BankService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.customerForm = this.formBuilder.group({
      bankName: [null],
      customerName: [null],
      accountPassword: [null],
      balance: [null]
    });
  }

  setCustomer(): void {
    this.customer = this.customerForm.value;
    this.bankService.setCustomer(this.customer).subscribe(data => {
      this.transactionReceipt = data;
      console.log(this.transactionReceipt);
    });
  }

}
