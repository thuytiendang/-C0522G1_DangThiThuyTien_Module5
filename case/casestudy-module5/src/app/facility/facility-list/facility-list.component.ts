import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility/facility';
import {FacilityService} from '../../service/facility/facility.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilityPageList: Facility[];
  numberRecord = 6;
  curPage = 1;
  totalPage: number;
  facilityNameSearch = '';

  facilityNameDelete: string;
  facilityImageDelete: string;
  facilityIdDelete: number;

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.facilityService.findAllFacilitySearch(this.facilityNameSearch).subscribe(value => {
      this.totalPage = Math.ceil(value.length / this.numberRecord);

    });
    this.facilityService.findFacilitySearchPaging(this.numberRecord, this.curPage, this.facilityNameSearch)
      .subscribe(pageList => {
        this.facilityPageList = pageList;
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

  getInfoFacilityDelete(facilityImage: string, facilityName: string, facilityId: number): void {
    this.facilityImageDelete = facilityImage;
    this.facilityNameDelete = facilityName;
    this.facilityIdDelete = facilityId;
  }

  deleteFacility(): void {
    this.curPage = 1;
    this.facilityService.deleteFacility(this.facilityIdDelete).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Xóa thành công!',
        text: 'Dịch vụ: ' + this.facilityNameDelete,
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
      });
      this.ngOnInit();
    }, error => {
      console.log(error);
    }, () => {
      console.log('Xóa dịch vụ thành công!');
    });
  }

  searchName(): void {
    this.curPage = 1;
    this.ngOnInit();
  }
}
