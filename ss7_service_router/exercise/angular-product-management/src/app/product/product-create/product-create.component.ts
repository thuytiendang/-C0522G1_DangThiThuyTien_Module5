import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService,
              private router: Router) { }

  productForm: FormGroup = new FormGroup ({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  ngOnInit(): void {
  }
  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product);
    alert('Thêm mới thành công');
    this.router.navigateByUrl('/product/list');
  }
}
