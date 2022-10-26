import {Component, OnInit} from '@angular/core';
import {RentType} from '../../model/facility/rent-type';
import {FacilityType} from '../../model/facility/facility-type';
import {FacilityListService} from '../../service/facility/facility-list.service';
import {RentTypeService} from '../../service/facility/rent-type.service';
import {FacilityTypeService} from '../../service/facility/facility-type.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {
  rentTypes: RentType[] = [];
  facilityTypes: FacilityType[] = [];

  constructor(private facilityListService: FacilityListService,
              private rentTypeService: RentTypeService,
              private facilityTypeService: FacilityTypeService,
              private router: Router) {
  }

  facilityForm: FormGroup = new FormGroup({
    facilityId: new FormControl(),
    facilityName: new FormControl(),
    facilityArea: new FormControl(),
    facilityCost: new FormControl(),
    maxPeople: new FormControl(),
    standardRoom: new FormControl(),
    descriptionOtherConvenience: new FormControl(),
    poolArea: new FormControl(),
    numberOfFloors: new FormControl(),
    facilityFree: new FormControl(),
    rentType: new FormControl(),
    facilityType: new FormControl(),
  });

  ngOnInit(): void {
    this.getFacilityTypes();
    this.getRentTypes();
  }

  getFacilityTypes(): void {
    this.facilityTypeService.getAll().subscribe(value => {
      this.facilityTypes = value;
    });
  }

  getRentTypes(): void {
    this.rentTypeService.getAll().subscribe(value => {
      this.rentTypes = value;
    });
  }

  addFacility(): void {
    const facility = this.facilityForm.value;
    this.facilityListService.saveFacility(facility).subscribe(value => {

    }, error => {

    }, () => {
      alert('Thêm mới thành công');
      this.router.navigateByUrl('/facility/list');
    });
  }
}
