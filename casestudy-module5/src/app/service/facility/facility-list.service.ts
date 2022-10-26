import {Injectable} from '@angular/core';
import {Facility} from '../../model/facility/facility';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilityListService {
  API_URL = ' http://localhost:3000/facilities';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Facility[]> {
    return this.http.get<Facility[]>(this.API_URL);
  }

  findById(facilityId: number): Observable<Facility> {
    return this.http.get<Facility>(this.API_URL + '/' + facilityId);
  }

  saveFacility(facility): Observable<Facility> {
    return this.http.post<Facility>(this.API_URL, facility);
  }

  updateFacility(facility: Facility): Observable<Facility> {
    return this.http.patch<Facility>(this.API_URL + '/' + facility.facilityId, facility);
  }

  deleteProduct(facilityId: number): Observable<Facility> {
    return this.http.delete<Facility>(this.API_URL + '/' + facilityId);
  }
}
