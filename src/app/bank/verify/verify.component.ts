import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';
import { TransactionReceipt } from '../model/transaction-receipt';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  transactionReceipt: TransactionReceipt;
  verifyForm: FormGroup;

  constructor(
    private bankService: BankService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.verifyForm = this.fb.group({
      bankName: [null]
    });
  }

  verifyStatement(): void {
    this.bankService.verifyStatement(this.verifyForm.controls['bankName'].value).subscribe(data => {
      this.transactionReceipt = data;
    });
  }

}
