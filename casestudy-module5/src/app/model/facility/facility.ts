import {RentType} from './rent-type';
import {FacilityType} from './facility-type';

export interface Facility {
  facilityId?: number;
  facilityName?: string;
  facilityArea?: number;
  facilityCost?: number;
  maxPeople?: number;
  standardRoom?: string;
  descriptionOtherConvenience?: string;
  poolArea?: number;
  numberOfFloors?: number;
  facilityFree?: string;
  rentType?: RentType;
  facilityType?: FacilityType;
}
