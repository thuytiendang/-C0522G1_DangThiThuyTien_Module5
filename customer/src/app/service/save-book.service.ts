import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SaveBook} from "../model/save-book";

@Injectable({
  providedIn: 'root'
})
export class SaveBookService {
  private API_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  findSaveBookSearch(customerNameSearch: string): Observable<SaveBook[]> {
    return this.httpClient.get<SaveBook[]>(this.API_URL +
      'SaveBook?customer.customerName_like=' + customerNameSearch);
  }

  findSaveBookSearchPaging(numberRecord: number, curPage: number,
                           customerNameSearch: string): Observable<SaveBook[]> {
    return this.httpClient.get<SaveBook[]>(this.API_URL + 'SaveBook?_page=' + curPage + '&_limit=' + numberRecord +
      '&customer.customerName_like=' + customerNameSearch);
  }

  deleteSaveBook(id: number): Observable<SaveBook> {
    return this.httpClient.delete<SaveBook>(this.API_URL + 'SaveBook/' + id);
  }

  getById(id: number): Observable<SaveBook> {
    return this.httpClient.get<SaveBook>(this.API_URL + 'SaveBook/' + id);
  }

  updateSaveBook(id: number, saveBook: SaveBook): Observable<SaveBook> {
    return this.httpClient.put<SaveBook>(this.API_URL + 'SaveBook/' + id, saveBook);
  }
}
