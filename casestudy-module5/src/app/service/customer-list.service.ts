import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerListService {
  customers: Customer[] = [
    {
      customerId: 1,
      customerName: 'Huỳnh Trung Thuyên',
      customerBirthday: '1994-08-16',
      customerGender: 'Male',
      customerIdCard: '206236476',
      customerPhone: '0905678453',
      customerEmail: 'thuyen@gmail.com',
      customerAddress: 'Da Nang',
      customerType: 'Diamond',
    },
    {
      customerId: 2,
      customerName: 'Dương Văn Quan',
      customerBirthday: '1995-12-09',
      customerGender: 'Male',
      customerIdCard: '543432111',
      customerPhone: '0490039241',
      customerEmail: 'duongquan@gmail.com',
      customerAddress: 'K453/12 Lê Lợi, Đà Nẵng',
      customerType: 'Diamond',
    },
    {
      customerId: 3,
      customerName: 'Hoàng Trần Nhi Anh',
      customerBirthday: '2000-03-20',
      customerGender: 'Female',
      customerIdCard: '096943753',
      customerPhone: '0905467894',
      customerEmail: 'thuytien2003@gmail.com',
      customerAddress: '194 Vũ Miên',
      customerType: 'Diamond',
    },
    {
      customerId: 4,
      customerName: 'Hoàng Trần Nhi Nhi',
      customerBirthday: '1995-12-09',
      customerGender: 'Female',
      customerIdCard: '795453345',
      customerPhone: '0312345678',
      customerEmail: 'nhinhi123@gmail.com',
      customerAddress: '224 Lý Thái Tổ, Gia Lai',
      customerType: 'Silver',
    },
    {
      customerId: 5,
      customerName: 'Nguyễn Hà Duyên',
      customerBirthday: '2000-07-23',
      customerGender: 'Female',
      customerIdCard: '206236476',
      customerPhone: '0919436753',
      customerEmail: 'dndgh@gmail.com',
      customerAddress: 'hòa Khánh',
      customerType: 'Diamond',
    },
    {
      customerId: 6,
      customerName: 'Nguyễn Tâm Đắc',
      customerBirthday: '1989-07-01',
      customerGender: 'Male',
      customerIdCard: '432341235',
      customerPhone: '0643343433',
      customerEmail: 'dactam@gmail.com',
      customerAddress: '22 Ngô Quyền, Đà Nẵng',
      customerType: 'Platinum',
    },
    {
      customerId: 7,
      customerName: 'Phạm Xuân Diệu',
      customerBirthday: '1992-08-08',
      customerGender: 'Male',
      customerIdCard: '865342123',
      customerPhone: '0954333333',
      customerEmail: 'xuandieu92@gmail.com',
      customerAddress: 'K77/22 Thái Phiên, Quảng Trị',
      customerType: 'Gold',
    },
    {
      customerId: 8,
      customerName: 'Nguyễn Mỹ Kim',
      customerBirthday: '1984-04-08',
      customerGender: 'Female',
      customerIdCard: '856453123',
      customerPhone: '0912345698',
      customerEmail: 'kimcuong84@gmail.com',
      customerAddress: 'K123/45 Lê Lợi, Hồ Chí Minh',
      customerType: 'Gold',
    },
  ];

  constructor() {
  }

  getAll() {
    return this.customers;
  }
}
