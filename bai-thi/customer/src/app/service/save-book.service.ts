import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SaveBook} from "../model/save-book";
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class SaveBookService {
  private API_URL = 'http://localhost:3000/';
  private API_BACKEND = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  getAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL + 'customer');
  }

  findSaveBookSearch(customerNameSearch: string, page: number): Observable<SaveBook[]> {
    return this.httpClient.get<SaveBook[]>(this.API_BACKEND +
      '?nameSearch=' + customerNameSearch + '&page=' + page );
  }

  // findSaveBookSearchPaging(numberRecord: number, curPage: number,
  //                          customerNameSearch: string, idSearch: string): Observable<SaveBook[]> {
  //   if(Number(idSearch)>0){
  //     return this.httpClient.get<SaveBook[]>(this.API_URL + 'SaveBook?_page=' + curPage + '&_limit=' + numberRecord +
  //       '&customer.customerName_like=' + customerNameSearch + '&id=' + idSearch);
  //   }
  //   return this.httpClient.get<SaveBook[]>(this.API_URL + 'SaveBook?_page=' + curPage + '&_limit=' + numberRecord +
  //     '&customer.customerName_like=' + customerNameSearch );
  // }

  deleteSaveBook(id: number): Observable<SaveBook> {
    return this.httpClient.delete<SaveBook>(this.API_BACKEND + '/' + id);
  }

  getById(id: number): Observable<SaveBook> {
    return this.httpClient.get<SaveBook>(this.API_URL + 'SaveBook/' + id);
  }

  updateSaveBook(id: number, saveBook: SaveBook): Observable<SaveBook> {
    return this.httpClient.put<SaveBook>(this.API_URL + 'SaveBook/' + id, saveBook);
  }

  addSaveBook(saveBook): Observable<SaveBook> {
    return this.httpClient.post<SaveBook>(this.API_URL + 'SaveBook', saveBook);
  }
}
