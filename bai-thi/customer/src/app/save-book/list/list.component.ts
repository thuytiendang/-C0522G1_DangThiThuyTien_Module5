import {Component, OnInit} from '@angular/core';
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
  totalPage: number;
  countTotalPage: number[];
  number: number;

  saveBookIdDelete: number;


  constructor(private saveBookService: SaveBookService) {
  }

  ngOnInit(): void {
   this.getSaveBook(this.customerNameSearch, 0);
  }

  getSaveBook(name: string, page: number) {
    this.saveBookService.findSaveBookSearch(name, page).subscribe((value: SaveBook[])  => {
      // @ts-ignore
      this.saveBookListPaging = value.content;
      // @ts-ignore
      this.totalPage = value.totalPages;
      // @ts-ignore
      this.number = value.number;
      // @ts-ignore
      this.countTotalPage = new Array(value.totalPages);
    });
  }


  next(): void {
    let numberPage: number = this.number;
    if (numberPage < this.totalPage - 1){
      numberPage++;
    }
    this.getSaveBook(this.customerNameSearch, numberPage);
  }

  previous(): void {
    let numberPage: number = this.number;
    if (numberPage > 0) {
      numberPage--;
    }
    this.getSaveBook(this.customerNameSearch, numberPage);
  }

  getInfoSaveBookDelete(saveBookId: number): void {
    this.saveBookIdDelete = saveBookId;
  }

  deleteSaveBook(): void {
    this.saveBookService.deleteSaveBook(this.saveBookIdDelete).subscribe(() => {
      Swal.fire({
        title: 'Delete successfully!',
        imageUrl: 'https://i.imgur.com/TBFaI9w.gif',
        imageHeight: 250,
        imageWidth: 400
      });
      this.ngOnInit();
    });
  }

  searchByMore(): void {
    this.getSaveBook(this.customerNameSearch, 0);
  }

  resetSearchInput() {
    this.customerNameSearch = '';
    this.ngOnInit();
  }

  goItem(i: number) {
    this.getSaveBook(this.customerNameSearch, i);
  }
}
