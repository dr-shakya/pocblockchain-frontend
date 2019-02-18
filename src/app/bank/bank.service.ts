import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BankInfo } from './model/bank-info';
import { TransactionReceipt } from './model/transaction-receipt';
import { Bank } from './model/bank';
import { Customer } from './model/customer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class BankService {
  apiBaseUrl = environment.apiBaseUrl;
  bank: Bank;

  constructor(private http: HttpClient) { }

  setBank(bank: Bank): Observable<TransactionReceipt> {
    return this.http.post<TransactionReceipt>(this.apiBaseUrl + '/bank', bank, httpOptions);
  }

  setCustomer(customer: Customer): Observable<TransactionReceipt> {
    return this.http.post<TransactionReceipt>(this.apiBaseUrl + '/bank/customer', customer, httpOptions);
  }

  verifyStatement(bankName: string): Observable<TransactionReceipt> {
    return this.http.post<TransactionReceipt>(this.apiBaseUrl + '/bank/verify/' + bankName, bankName, httpOptions);
  }

  getBank(bankName: string): Observable<BankInfo> {
    return this.http.get<BankInfo>(this.apiBaseUrl + '/bank/' + bankName);
  }

  getBalance(customerName: string): Observable<string> {
    return this.http.get<string>(this.apiBaseUrl + '/bank/balance/' + customerName);
  }

}
