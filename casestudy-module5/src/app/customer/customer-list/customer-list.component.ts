import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer/customer';
import {CustomerListService} from '../../service/customer/customer-list.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  customerListPaging: Customer[];
  curPage = 1;
  totalPage: number;
  customerNameDelete: string;
  customerIdDelete: number;

  customerNameSearch = '';
  customerAddressSearch = '';
  customerPhoneSearch = '';

  constructor(private customerListService: CustomerListService) {
  }

  ngOnInit(): void {
    this.customerListService.getAll().subscribe(value => {
      this.totalPage = Math.ceil(value.length / 5);
      this.customerListPaging = value.slice(0, 5);
      this.customers = value;
    }, error => {
      console.log(error);
    }, () => {
      console.log('Complete');
    });
  }

  next(): void {
    this.curPage++;
    this.customerListPaging = this.customers.slice((this.curPage - 1) * 5,
      this.curPage * 5);
  }

  previous(): void {
    this.curPage--;
    this.customerListPaging = this.customers.slice((this.curPage - 1) * 5, this.curPage * 5);
  }

  getInfoCustomerDelete(customerId: number, customerName: string): void {
    this.customerIdDelete = customerId;
    this.customerNameDelete = customerName;
  }

  deleteCustomer(): void {
    this.customerListService.deleteCustomer(this.customerIdDelete).subscribe(value => {
      this.ngOnInit();
    }, error => {

    }, () => {
      alert('delete successfully!');
      // this.router.navigateByUrl('/customer/list');
    });
  }

  searchByMore(): void {
    this.customerListService.getAll().subscribe(value => {
      this.customers = value.filter(item => item.customerName.toLowerCase().includes(this.customerNameSearch.toLowerCase())
        && item.customerAddress.toLowerCase().includes(this.customerAddressSearch.toLowerCase())
        && item.customerPhone.toLowerCase().includes(this.customerPhoneSearch.toLowerCase()));
      this.totalPage = Math.ceil(this.customers.length / 5);
      this.customerListPaging = this.customers.slice(0, 5);
    });
  }
}
