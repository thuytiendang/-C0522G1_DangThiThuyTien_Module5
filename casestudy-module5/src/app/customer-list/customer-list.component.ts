import { Component, OnInit } from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerListService} from '../service/customer-list.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerListService: CustomerListService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customers = this.customerListService.getAll();
  }
}
