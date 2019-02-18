import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerInfo } from './models/customer-info';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Statement } from './models/statement';
import { TransactionReceipt } from '../bank/model/transaction-receipt';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiBaseUrl = environment.apiBaseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getCustomer(customerName: string): Observable<CustomerInfo> {
    return this.http.get<CustomerInfo>(this.apiBaseUrl + '/customer/' + customerName);
  }

  getBalance(customerName: string): Observable<number> {
    return this.http.get<number>(this.apiBaseUrl + '/customer/balance/' + customerName);
  }

  requestBalanceUpdate(statement: Statement): Observable<TransactionReceipt> {
    return this.http.post<TransactionReceipt>(this.apiBaseUrl + '/customer/request', statement, httpOptions);
  }
}
