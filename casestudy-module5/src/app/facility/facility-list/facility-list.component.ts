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

  constructor(private facilityListService: FacilityListService) { }

  ngOnInit(): void {
    this.facilityListService.getAll().subscribe(value => {
      this.facilities = value;
    }, error => {
      console.log(error);
    }, () => {
      console.log('Complete');
    });
  }
}
