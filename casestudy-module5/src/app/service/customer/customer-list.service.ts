import {Injectable} from '@angular/core';
import {Customer} from '../../model/customer/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerListService {
  API_URL = ' http://localhost:3000/customers';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL);
  }

  findById(customerId: number): Observable<Customer> {
    return this.http.get<Customer>(this.API_URL + '/' + customerId);
  }

  saveCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(this.API_URL, customer);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.patch<Customer>(this.API_URL + '/' + customer.customerId, customer);
  }

  deleteCustomer(customerId: number): Observable<Customer> {
    return this.http.delete<Customer>(this.API_URL + '/' + customerId);
  }
}
