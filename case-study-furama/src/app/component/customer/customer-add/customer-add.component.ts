import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../service/customer.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TypeCustomer} from '../../model/typeCustomer';
import {Router} from '@angular/router';
import {TypeCustomerService} from '../../../service/typeCustomer.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  customerForm: FormGroup;
  typeCustomer: TypeCustomer[];

  constructor(private customerService: CustomerService,
              private router: Router,
              private customerType: TypeCustomerService,
              private toast: ToastrService) {
    this.customerType.findAllTypeCustomer().subscribe(data => {
      this.typeCustomer = data;
    });
  }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      id: new FormControl(),
      customerName: new FormControl(),
      dateOfBirth: new FormControl(),
      gender: new FormControl("Nam"),
      identify: new FormControl(),
      phoneNumber: new FormControl(),
      email: new FormControl('',[Validators.email,Validators.required]),
      customerType: new FormControl(0),
      address: new FormControl()
    });
  }

  add() {
    console.log(this.customerForm.value);
    this.customerService.create(this.customerForm.value).subscribe(data => {
      this.router.navigateByUrl('/customer/list');
      this.toast.success("Them moi thanh cong","Thong bao")
    });
  }
}
