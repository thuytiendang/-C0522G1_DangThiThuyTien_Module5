import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {
  categoryForm: FormGroup;
  categoryId: number;
  category: Category;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(value => {
      this.categoryId = Number(value.get('id'));
    });
    this.categoryService.findById(this.categoryId).subscribe(value => {
      this.category = value;
      this.categoryForm.patchValue(this.category);
    });
    this.categoryForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
    });
  }

  updateCategory(): void {
    const categoryAfter = this.categoryForm.value;
    categoryAfter.id = this.category.id;
    this.categoryService.updateCategory(categoryAfter).subscribe(value => {

    }, error => {

    }, () => {
      alert('Cập nhật thành công');
      this.router.navigateByUrl('/category/list');
    });
  }

}
