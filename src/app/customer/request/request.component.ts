import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { TransactionReceipt } from 'src/app/bank/model/transaction-receipt';
import { Statement } from '../models/statement';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  requestForm: FormGroup;
  transactionReceipt: TransactionReceipt;
  statement: Statement;

  constructor(
    private customerService: CustomerService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.requestForm = this.formBuilder.group({
      customerName: [null],
      bankName: [null],
      message: [null],
      balance: [null]
    });
  }

  requestBalanceUpdate(): void {
    this.statement = this.requestForm.value;
    console.log(this.statement);
    this.customerService.requestBalanceUpdate(this.statement).subscribe(data => {
      this.transactionReceipt = data;
    });
  }

}
