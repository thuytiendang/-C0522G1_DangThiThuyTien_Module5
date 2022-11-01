import {Customer} from "./customer";

export interface SaveBook {
  id?: number;
  openDate?: string;
  startDate?: string;
  dueDate?: string;
  money?: number;
  interest?: string;
  moreBenefit?: string;
  customer?: Customer;
}
