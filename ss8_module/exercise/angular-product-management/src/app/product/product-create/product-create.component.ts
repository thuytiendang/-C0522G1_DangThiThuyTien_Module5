import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) {
  }

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });

  ngOnInit(): void {
    this.getAllCategory();
  }

  addProduct(): void {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(value => {

    }, error => {

    }, () => {
      alert('Thêm mới thành công');
      this.router.navigateByUrl('/product/list');
    });
  }

  getAllCategory(): void {
    this.categoryService.getAll().subscribe(value => {
      this.categories = value;
    });
  }
}
