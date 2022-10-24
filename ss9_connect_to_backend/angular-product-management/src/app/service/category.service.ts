import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API_URL = 'http://localhost:3000/categorise';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.API_URL);
  }

  saveCategory(category): Observable<Category> {
    return this.http.post<Category>(this.API_URL, category);
  }

  findById(categoryId: number): Observable<Category> {
    return this.http.get<Category>(this.API_URL + '/' + categoryId);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.patch<Category>(this.API_URL + '/' + category.id, category);
  }

  deleteCategory(categoryId: number): Observable<Category> {
    return this.http.delete<Category>(this.API_URL + '/' + categoryId);
  }

}
