import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductModule} from './product/product.module';
import {CategoryModule} from './category/category.module';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => ProductModule
  },
  {
    path: 'category',
    loadChildren: () => CategoryModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
