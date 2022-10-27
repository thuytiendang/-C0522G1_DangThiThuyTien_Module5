import {Component, OnInit} from '@angular/core';
import {CustomerType} from '../../model/customer/customer-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerListService} from '../../service/customer/customer-list.service';
import {CustomerTypeService} from '../../service/customer/customer-type.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../model/customer/customer';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customerTypes: CustomerType[] = [];
  formUpdateCustomer: FormGroup;
  customer: Customer;
  id: number;

  constructor(private customerListService: CustomerListService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(value => {
      this.id = Number(value.get('id'));
    });
    this.customerListService.findById(this.id).subscribe(value => {
      this.customer = value;
      this.formUpdateCustomer.patchValue(this.customer);
    });
    this.formUpdateCustomer = new FormGroup({
      id: new FormControl('', Validators.required),
      customerName: new FormControl('', Validators.pattern('^[a-z A-Z]{1,50}$')),
      customerBirthday: new FormControl('', Validators.required),
      customerGender: new FormControl('', Validators.required),
      customerIdCard: new FormControl('', Validators.pattern('^(\\d{9}|\\d{12})')),
      customerPhone: new FormControl('', Validators.pattern('^((0|[(]84[)][+])9[01]\\d{7})')),
      customerEmail: new FormControl('', Validators.email),
      customerAddress: new FormControl('', Validators.required),
      customerType: new FormControl('', Validators.required)
    });
    this.getCustomerType();
  }

  updateCustomer(): void {
    const customerAfter = this.formUpdateCustomer.value;
    customerAfter.id = this.customer.id;
    this.customerListService.updateCustomer(customerAfter).subscribe(value => {

    }, error => {

    }, () => {
      alert('Update successfully!');
      this.router.navigateByUrl('/customer/list');
    });
  }

  getCustomerType(): void {
    this.customerTypeService.getAll().subscribe(value => {
      this.customerTypes = value;
    });
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

}
