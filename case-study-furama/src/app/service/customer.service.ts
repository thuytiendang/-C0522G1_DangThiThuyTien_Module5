import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../component/model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/customer');
  }

  delete(id: number) {
    return this.http.delete('http://localhost:3000/customer/' + id);
  }

  create(customer: Customer) {
    return this.http.post('http://localhost:3000/customer', customer);
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>('http://localhost:3000/customer/' + id);
  }

  update(id: number, customer: Customer): Observable<any> {
    return this.http.put('http://localhost:3000/customer/' + id, customer);
  }

  search(name, typeID): Observable<any> {
    return this.http.get<any[]>(`http://localhost:3000/customer?customerName_like=${name}&customerType.id_like=${typeID}`);
    // return this.http.get<any[]>('http://localhost:3000/customer?customerName_like=' + name + '&customerType.id_like= ' + typeID);
  }

  //doi pho
  // searchAll(customer: any): Observable<any> {
  //   return this.http.get<any>(`http://localhost:3000/customer?q=${customer}`);
  // }
}
