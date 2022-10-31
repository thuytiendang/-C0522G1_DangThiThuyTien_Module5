import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/customer";
import {SaveBook} from "../../model/save-book";
import {SaveBookService} from "../../service/save-book.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  customerNameSearch = '';

  saveBookListPaging: SaveBook[];
  numberRecord = 5;
  curPage = 1;
  totalPage: number;

  saveBookIdDelete: number;


  constructor(private saveBookService: SaveBookService) { }

  ngOnInit(): void {
    this.saveBookService.findSaveBookSearch(this.customerNameSearch).subscribe(value => {
      this.totalPage = Math.ceil(value.length / this.numberRecord);
    });

    this.saveBookService.findSaveBookSearchPaging(this.numberRecord, this.curPage, this.customerNameSearch)
      .subscribe(value => {
        this.saveBookListPaging = value;
      });
  }

  next(): void {
    this.curPage++;
    this.ngOnInit();
  }

  previous(): void {
    this.curPage--;
    this.ngOnInit();
  }

  getInfoSaveBookDelete(saveBookId: number): void {
    this.saveBookIdDelete = saveBookId;
  }

  deleteSaveBook(): void {
    this.saveBookService.deleteSaveBook(this.saveBookIdDelete).subscribe(() => {
      Swal.fire({
        title: 'Delete successfully!',
        // text: 'Khách hàng: ' + this.customerNameDelete,
        imageUrl: 'https://i.imgur.com/TBFaI9w.gif',
        imageHeight: 250,
        imageWidth: 400
      });
      this.curPage = 1;
      this.ngOnInit();
    });
  }

  searchByMore(): void {
    this.curPage = 1;
    this.ngOnInit();
  }
}
