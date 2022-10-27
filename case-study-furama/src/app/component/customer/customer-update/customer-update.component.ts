import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../service/customer.service';
import {Customer} from '../../model/customer';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TypeCustomer} from '../../model/typeCustomer';
import {TypeCustomerService} from '../../../service/typeCustomer.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customer: Customer;
  id: number;
  customerForm: FormGroup;
  typeCustomer1: TypeCustomer[] = []
  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private typeCustomer : TypeCustomerService,
              private toast : ToastrService) {
    this.activatedRoute.paramMap.subscribe((param :ParamMap) => {
      console.log(+param.get('id'))
      this.id = +param.get('id')
    })
    this.typeCustomer.findAllTypeCustomer().subscribe(data=> {
      this.typeCustomer1 = data
    })
  }

  ngOnInit(): void {
    this.customerService.findById(this.id).subscribe(data=> {
      this.customer = data;
    },error => {

    },() => {
      console.log(this.customer);
      this.customerForm = new FormGroup( {
        id: new FormControl(this.customer.id),
        customerName: new FormControl(this.customer.customerName),
        dateOfBirth: new FormControl(this.customer.dateOfBirth),
        gender: new FormControl(this.customer.gender),
        identify: new FormControl(this.customer.identify),
        phoneNumber: new FormControl(this.customer.phoneNumber),
        email: new FormControl(this.customer.email,[Validators.email]),
        customerType: new FormControl(this.customer.customerType),
        address: new FormControl(this.customer.address)
      })
    })
  }

  update() {
    this.customerService.update(this.customerForm.value.id,this.customerForm.value).subscribe(next=> {
      this.router.navigateByUrl('/customer/list')
      this.toast.success("notification","Update completely")
    })
  }
}
