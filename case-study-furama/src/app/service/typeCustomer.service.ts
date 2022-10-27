import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TypeCustomer} from '../component/model/typeCustomer';

@Injectable({
  providedIn: 'root'
})
export class TypeCustomerService {

  constructor(private http: HttpClient) {
  }

  findAllTypeCustomer(): Observable<TypeCustomer[]> {
    return this.http.get<TypeCustomer[]>('http://localhost:3000/typeCustomer');
  }
}
