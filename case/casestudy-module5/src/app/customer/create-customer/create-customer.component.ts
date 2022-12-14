import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer/customer-type';
import {Router} from '@angular/router';
import {CustomerService} from '../../service/customer/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customerTypes: CustomerType[] = [];
  formCreateCustomer: FormGroup;

  constructor(private customerListService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCustomerType();
    console.log(this.getCustomerType());
    this.formCreateCustomer = new FormGroup({
      // customerId: new FormControl('', Validators.required),
      customerName: new FormControl('', Validators.pattern('^[a-z A-Z]{1,50}$')),
      customerBirthday: new FormControl('', Validators.required),
      customerGender: new FormControl('', Validators.required),
      customerIdCard: new FormControl('', Validators.pattern('^(\\d{9}|\\d{12})')),
      customerPhone: new FormControl('', Validators.pattern('^((0|[(]84[)][+])9[01]\\d{7})')),
      customerEmail: new FormControl('', Validators.email),
      customerAddress: new FormControl('', Validators.required),
      customerType: new FormControl('', Validators.required)
    });
  }

  createCustomer(): void {
    const customer = this.formCreateCustomer.value;
    this.customerListService.addCustomer(customer).subscribe(value => {

    }, error => {
      console.log(error);
    }, () => {
      alert('Add successfully!');
      this.router.navigateByUrl('/customer/list');
    });
  }

  getCustomerType(): void {
    this.customerListService.findAllCustomerType().subscribe(value => {
      this.customerTypes = value;
      console.log(value);
    });
  }
}
