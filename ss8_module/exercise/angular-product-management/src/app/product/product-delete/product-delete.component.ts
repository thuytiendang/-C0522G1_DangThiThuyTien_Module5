import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productForm: FormGroup;
  productId: number;
  product: Product;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(value => {
      this.productId = Number(value.get('id'));
    });

    this.productService.findById(this.productId).subscribe(value => {
      this.product = value;
      this.productForm.patchValue(this.product);
    });

    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl(),
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(value => {

    }, error => {

    }, () => {
      alert('Xóa thành công!');
      this.router.navigateByUrl('/product/list');
    });
  }
}
