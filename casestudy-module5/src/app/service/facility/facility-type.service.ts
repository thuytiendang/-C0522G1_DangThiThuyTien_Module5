import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FacilityType} from '../../model/facility/facility-type';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  API_URL = ' http://localhost:3000/facilityTypes';

  constructor(private http: HttpClient) { }

  getAll(): Observable<FacilityType[]> {
    return this.http.get<FacilityType[]>(this.API_URL);
  }
}
