import { Component, OnInit } from '@angular/core';
import { Bank } from '../model/bank';
import { BankService } from '../bank.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BankInfo } from '../model/bank-info';
import { TransactionReceipt } from '../model/transaction-receipt';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.css']
})
export class AddBankComponent implements OnInit {

  bank: Bank = new Bank();
  bankForm: FormGroup;
  bankDetailForm: FormGroup;
  bankInfo: BankInfo;
  transactionReceipt: TransactionReceipt;

  constructor(
    private bankService: BankService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void{
    this.bankForm = this.formBuilder.group({
      bankName: [null],
      accountPassword: [null]
    });
    this.bankDetailForm = this.formBuilder.group({
      bankName: [null]
    })
  }

  setBank(): void {
    this.bank = this.bankForm.value;
    console.log(this.bank);
    this.bankService.setBank(this.bank).subscribe(data => {
      this.transactionReceipt = data;
      console.log(this.transactionReceipt);
    });
  }

  getBank(): void {
    console.log('getBank');
    this.bankService.getBank(this.bankDetailForm.controls['bankName'].value).subscribe(data => {
      this.bankInfo = data;
      console.log('Bank info: ', this.bankInfo);
    });
  }

}
