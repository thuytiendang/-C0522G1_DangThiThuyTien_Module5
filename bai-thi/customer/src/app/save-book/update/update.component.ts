import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {SaveBookService} from "../../service/save-book.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  saveBookFormGroup: FormGroup;
  customerList: Customer[];
  saveBookId: number;

  constructor(private saveBookService: SaveBookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.saveBookId = Number(this.activatedRoute.snapshot.params.id);

    this.saveBookService.getById(this.saveBookId).subscribe(value => {
      this.saveBookFormGroup.patchValue(value);
    });
    this.saveBookFormGroup = new FormGroup({
      id: new FormControl(),
      openDate: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      dueDate: new FormControl('', Validators.required),
      money: new FormControl('', Validators.min(10000000)),
      interest: new FormControl('', Validators.required),
      moreBenefit: new FormControl('', Validators.required),
      customer: new FormGroup({
        id: new FormControl(),
        customerName: new FormControl()
      })
    });
    this.getAllCustomer();
  }

  updateSaveBook(id: number) {
    const saveBook = this.saveBookFormGroup.value;
    this.saveBookService.updateSaveBook(id, saveBook).subscribe(() => {
      Swal.fire({
        title: 'Update successfully!',
        imageUrl: 'https://img.wattpad.com/4324d3ce97bb81dd74c32fe4faf0ff098d2d4d70/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f70303556643131776b7337596d413d3d2d36322e3134646534393236633462306531353938303230373630353433372e676966',
        imageHeight: 250,
        imageWidth: 400
      });

      this.router.navigateByUrl('');
    });
  }

  getAllCustomer() {
    this.saveBookService.getAllCustomer().subscribe(value => {
      this.customerList = value;
    });
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
    // checkDate(abstractControl: AbstractControl): any {
    //   const openDate = new Date(abstractControl.value.openDate).getDate();
    //   const startDate = new Date(abstractControl.value.startDate).getFullYear();
    //
    //   return (startDate - openDate < 0) ? null : {invalidDate: true};
    // }

}
