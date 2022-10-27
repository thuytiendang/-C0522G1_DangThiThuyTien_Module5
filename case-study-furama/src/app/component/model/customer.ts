import {TypeCustomer} from './typeCustomer';

export interface Customer {
  id? : number;
  customerName? : string;
  dateOfBirth? : string;
  gender? : string;
  identify? : string;
  phoneNumber? : string;
  email? : string;
  customerType? : TypeCustomer;
  address? : string;
}
