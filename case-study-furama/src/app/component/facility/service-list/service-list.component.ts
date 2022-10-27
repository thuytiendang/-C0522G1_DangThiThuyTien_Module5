import { Component, OnInit } from '@angular/core';
import {Facility} from '../../model/facility';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
facility: Facility[]=[{facilityName: "Phòng hướng vườn",facilityArea: 2, facilityCost: 3.5,
numberOfPeople:12, rentType: "tháng", standardFacility: "Vip", descriptionOther: null, poolArea: 12,
numberOfFloor: 3, serviceFree: null,img: "https://furamavietnam.com/wp-content/uploads/2018/03/%5E19BFC67D7D58B6D3C155DB9CA96927213F31F8C8E7F909F3E2%5Epimgpsh_fullsize_distr-1047x563.jpg"},
  {facilityName: "Phòng hướng vườn",facilityArea: 2, facilityCost: 3.5,
    numberOfPeople:12, rentType: "tháng", standardFacility: "Vip", descriptionOther: null, poolArea: 12,
    numberOfFloor: 3, serviceFree: null,img: "https://furamavietnam.com/wp-content/uploads/2018/03/%5E19BFC67D7D58B6D3C155DB9CA96927213F31F8C8E7F909F3E2%5Epimgpsh_fullsize_distr-1047x563.jpg"},{facilityName: "Phòng hướng vườn",facilityArea: 2, facilityCost: 3.5,
    numberOfPeople:12, rentType: "tháng", standardFacility: "Vip", descriptionOther: null, poolArea: 12,
    numberOfFloor: 3, serviceFree: null,img: "https://furamavietnam.com/wp-content/uploads/2018/03/%5E19BFC67D7D58B6D3C155DB9CA96927213F31F8C8E7F909F3E2%5Epimgpsh_fullsize_distr-1047x563.jpg"},{facilityName: "Phòng hướng vườn",facilityArea: 2, facilityCost: 3.5,
    numberOfPeople:12, rentType: "tháng", standardFacility: "Vip", descriptionOther: null, poolArea: 12,
    numberOfFloor: 3, serviceFree: null,img: "https://furamavietnam.com/wp-content/uploads/2018/03/%5E19BFC67D7D58B6D3C155DB9CA96927213F31F8C8E7F909F3E2%5Epimgpsh_fullsize_distr-1047x563.jpg"},{facilityName: "Phòng hướng vườn",facilityArea: 2, facilityCost: 3.5,
    numberOfPeople:12, rentType: "tháng", standardFacility: "Vip", descriptionOther: null, poolArea: 12,
    numberOfFloor: 3, serviceFree: null,img: "https://furamavietnam.com/wp-content/uploads/2018/03/%5E19BFC67D7D58B6D3C155DB9CA96927213F31F8C8E7F909F3E2%5Epimgpsh_fullsize_distr-1047x563.jpg"},{facilityName: "Phòng hướng vườn",facilityArea: 2, facilityCost: 3.5,
    numberOfPeople:12, rentType: "tháng", standardFacility: "Vip", descriptionOther: null, poolArea: 12,
    numberOfFloor: 3, serviceFree: null,img: "https://furamavietnam.com/wp-content/uploads/2018/03/%5E19BFC67D7D58B6D3C155DB9CA96927213F31F8C8E7F909F3E2%5Epimgpsh_fullsize_distr-1047x563.jpg"}]
  constructor() { }

  ngOnInit() {
  }

}
