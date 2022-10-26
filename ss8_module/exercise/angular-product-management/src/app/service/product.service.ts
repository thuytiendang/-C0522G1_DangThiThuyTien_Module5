import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

API_URL = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL);
  }

  saveProduct(product): Observable<Product> {
    return this.http.post<Product>(this.API_URL, product);
  }

  findById(productId: number): Observable<Product> {
    return this.http.get<Product>(this.API_URL + '/' + productId);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.patch<Product>(this.API_URL + '/' + product.id, product);
  }

  deleteProduct(productId: number): Observable<Product> {
    return this.http.delete<Product>(this.API_URL + '/' + productId);
  }

}
