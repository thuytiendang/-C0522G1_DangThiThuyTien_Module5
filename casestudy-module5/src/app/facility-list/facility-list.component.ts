import { Component, OnInit } from '@angular/core';
import {Facility} from '../model/facility';
import {FacilityListService} from '../service/facility-list.service';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities: Facility[] = [];

  constructor(private facilityListService: FacilityListService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facilities = this.facilityListService.getAll();
  }
}
