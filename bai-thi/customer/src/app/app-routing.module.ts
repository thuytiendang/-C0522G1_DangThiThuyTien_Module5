import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./save-book/list/list.component";
import {UpdateComponent} from "./save-book/update/update.component";


const routes: Routes = [
  {
    path: '', component: ListComponent
  },
  {
    path: 'update/:id', component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
