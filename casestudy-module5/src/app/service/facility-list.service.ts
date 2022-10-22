import {Injectable} from '@angular/core';
import {Facility} from '../model/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityListService {
  facilities: Facility[] = [
    {
      facilityId: 1,
      facilityName: 'Villa Beach Front',
      facilityArea: 1000,
      facilityCost: 1000000,
      maxPeople: 10,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 200,
      numberOfFloors: 5,
      facilityFree: '',
      rentType: 'ngày',
      facilityType: 'Villa',
    },
    {
      facilityId: 2,
      facilityName: 'House Princess',
      facilityArea: 1000,
      facilityCost: 1000000,
      maxPeople: 10,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 200,
      numberOfFloors: 5,
      facilityFree: '',
      rentType: 'tháng',
      facilityType: 'House',
    },
    {
      facilityId: 3,
      facilityName: 'Room Princess',
      facilityArea: 1000,
      facilityCost: 1000000,
      maxPeople: 10,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 200,
      numberOfFloors: 5,
      facilityFree: '',
      rentType: 'ngày',
      facilityType: 'room',
    },
    {
      facilityId: 4,
      facilityName: 'Villa Princess',
      facilityArea: 1000,
      facilityCost: 1000000,
      maxPeople: 10,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 200,
      numberOfFloors: 5,
      facilityFree: '',
      rentType: 'ngày',
      facilityType: 'Villa',
    },
    {
      facilityId: 5,
      facilityName: 'Villa Beach Front',
      facilityArea: 1000,
      facilityCost: 1000000,
      maxPeople: 10,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 200,
      numberOfFloors: 5,
      facilityFree: '',
      rentType: 'ngày',
      facilityType: 'Villa',
    },
    {
      facilityId: 6,
      facilityName: 'House Princess',
      facilityArea: 1000,
      facilityCost: 1000000,
      maxPeople: 10,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 200,
      numberOfFloors: 5,
      facilityFree: '',
      rentType: 'tháng',
      facilityType: 'House',
    },
    {
      facilityId: 7,
      facilityName: 'Room Princess',
      facilityArea: 1000,
      facilityCost: 1000000,
      maxPeople: 10,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 200,
      numberOfFloors: 5,
      facilityFree: '',
      rentType: 'ngày',
      facilityType: 'room',
    },
    {
      facilityId: 8,
      facilityName: 'Villa Princess',
      facilityArea: 1000,
      facilityCost: 1000000,
      maxPeople: 10,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 200,
      numberOfFloors: 5,
      facilityFree: '',
      rentType: 'ngày',
      facilityType: 'Villa',
    },
  ];

  constructor() {
  }

  getAll() {
    return this.facilities;
  }
}
