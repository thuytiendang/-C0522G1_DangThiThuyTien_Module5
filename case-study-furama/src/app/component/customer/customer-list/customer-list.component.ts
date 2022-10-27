import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../../service/customer.service';
import {FormControl, FormGroup} from '@angular/forms';
import {TypeCustomer} from '../../model/typeCustomer';
import {TypeCustomerService} from '../../../service/typeCustomer.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer: Customer[] = [];
  customerF: Customer;
  typeCustomer : TypeCustomer[] = []
  p: number =1

  constructor(private customerService: CustomerService,
              private typeCustomer1: TypeCustomerService,
              private toast: ToastrService) {

  }

  ngOnInit(): void {
    this.customerService.findAll().subscribe(data => {
      this.customer = data;
    });
    this.typeCustomer1.findAllTypeCustomer().subscribe(data => {
      this.typeCustomer = data;
    })

  }

  delete(id: number) {
    this.customerService.delete(id).subscribe(next => {
      this.customerService.findAll().subscribe(data => {
        this.customer = data;
        this.toast.success("notification","delete completely")
      });
    });
  }

  getInfo(c: Customer) {
    this.customerF = c;
  }

  search(value: string, value2: string) {
    this.customerService.search(value, value2).subscribe(customers=>{
      this.customer = customers;
    })
  }

  //doi pho
  // searchAll(value: string) {
  //   this.customerService.searchAll(value).subscribe(next => {
  //     this.customer = next;
  //   })
  // }
}
