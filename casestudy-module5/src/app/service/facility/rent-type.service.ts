import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RentType} from '../../model/facility/rent-type';

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  API_URL = ' http://localhost:3000/rentTypes';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<RentType[]> {
    return this.http.get<RentType[]>(this.API_URL);
  }
}
