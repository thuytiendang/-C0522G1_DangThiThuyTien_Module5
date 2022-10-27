import { Component, OnInit } from '@angular/core';
import {Facility} from '../../model/facility/facility';
import {FacilityListService} from '../../service/facility/facility-list.service';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities: Facility[] = [];
  facilityListPaging: Facility[];
  curPage = 1;
  totalPage: number;
  facilityNameSearch = '';

  constructor(private facilityListService: FacilityListService) { }

  ngOnInit(): void {
    this.facilityListService.getAll().subscribe(value => {
      this.totalPage = Math.ceil(value.length / 5);
      this.facilityListPaging = value.slice(0, 5);
      this.facilities = value;
    }, error => {
      console.log(error);
    }, () => {
      console.log('Complete');
    });
  }

  next(): void {
    this.curPage++;
    this.facilityListPaging = this.facilities.slice((this.curPage - 1) * 5,
      this.curPage * 5);
  }

  previous(): void {
    this.curPage--;
    this.facilityListPaging = this.facilities.slice((this.curPage - 1) * 5, this.curPage * 5);
  }

  searchByName(): void {
    this.facilityListService.getAll().subscribe(value => {
      this.facilities = value.filter(item => item.facilityName.toLowerCase().includes(this.facilityNameSearch.toLowerCase()));
      this.totalPage = Math.ceil(this.facilities.length / 5);
      this.facilityListPaging = this.facilities.slice(0, 5);
    });
  }
}
