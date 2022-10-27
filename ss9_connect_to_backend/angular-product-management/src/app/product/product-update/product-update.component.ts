import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../model/product';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productForm: FormGroup;
  productId: number;
  product: Product;
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
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
    this.getAllCategory();
  }


  updateProduct(): void {
    const productAfter = this.productForm.value;
    productAfter.id = this.product.id;
    this.productService.updateProduct(productAfter).subscribe(value => {

    }, error => {

    }, () => {
      alert('CẬp nhật thành công');
      this.router.navigateByUrl('/product/list');
    });
  }

  getAllCategory(): void {
    this.categoryService.getAll().subscribe(value => {
      this.categories = value;
    });
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}
