import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  constructor(private categoryService: CategoryService,
              private router: Router) {
  }

  categoryForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
  });

  ngOnInit(): void {
  }

  addCategory(): void {
    const category = this.categoryForm.value;
    this.categoryService.saveCategory(category).subscribe(value => {

    }, error => {

    }, () => {
      alert('Thêm mới thành công');
      this.router.navigateByUrl('/category/list');
    });
  }
}
