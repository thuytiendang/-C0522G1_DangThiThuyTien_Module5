import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from '../product/product-list/product-list.component';
import {ProductCreateComponent} from '../product/product-create/product-create.component';
import {ProductUpdateComponent} from '../product/product-update/product-update.component';
import {ProductDeleteComponent} from '../product/product-delete/product-delete.component';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryCreateComponent} from './category-create/category-create.component';
import {CategoryUpdateComponent} from './category-update/category-update.component';
import {CategoryDeleteComponent} from './category-delete/category-delete.component';


const routes: Routes = [
  {path: 'list', component: CategoryListComponent},
  {path: 'create', component: CategoryCreateComponent},
  {path: 'update/:id', component: CategoryUpdateComponent},
  {path: 'delete/:id', component: CategoryDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
