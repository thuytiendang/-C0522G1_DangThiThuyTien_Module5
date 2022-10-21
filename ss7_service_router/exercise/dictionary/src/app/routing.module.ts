import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';

const routes: Routes = [
  {path: '', component: DictionaryPageComponent},
  {path: '/detail', component: DictionaryDetailComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
