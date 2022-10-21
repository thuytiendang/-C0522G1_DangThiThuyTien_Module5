import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productForm: FormGroup;
  productId: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(value => {
      this.productId = Number(value.get('id'));
    });
    const product = this.productService.findById(this.productId);
    this.productForm = new FormGroup({
      id: new FormControl(product.id),
      name: new FormControl(product.name),
      price: new FormControl(product.price),
      description: new FormControl(product.description),
    });
  }

  getProduct(id: number) {
    return this.productService.findById(id);
  }

  deleteProduct(id: number) {
    // const product = this.productForm.value;
    this.productService.deleteProduct(id);
    alert('Xóa thành công!');
    this.router.navigateByUrl('/product/list');
  }
}
