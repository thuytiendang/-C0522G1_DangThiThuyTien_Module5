import {Component, OnInit} from '@angular/core';
import {RentType} from '../../model/facility/rent-type';
import {FacilityType} from '../../model/facility/facility-type';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../service/facility/facility.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {
  facilityFormGroup: FormGroup = new FormGroup({
    facilityName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
    facilityArea: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    rentCost: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    maxPeople: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    standardRoom: new FormControl(''),
    descriptionOtherConvenience: new FormControl(''),
    poolArea: new FormControl(''),
    numberOfFloors: new FormControl(''),
    facilityFree: new FormControl(''),
    rentType: new FormControl('', Validators.required),
    facilityType: new FormControl('', Validators.required),
    facilityImage: new FormControl('', Validators.required)
  });

  facilityTypeList: FacilityType[];
  rentTypeList: RentType[];

  facilityType: FacilityType = {
    id: 4,
    facilityTypeName: ''
  };

  constructor(private facilityService: FacilityService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.facilityService.findAllFacilityType().subscribe(value => {
      this.facilityTypeList = value;
    });

    this.facilityService.findAllRentType().subscribe(value => {
      this.rentTypeList = value;
    });
  }

  submit(): void {
    const facility = this.facilityFormGroup.value;
    this.facilityService.addFacility(facility).subscribe(() => {
      this.facilityFormGroup.reset();
    }, error => {
      console.log(error);
    }, () => {
      Swal.fire({
        title: 'Thêm mới thành công!',
        text: 'Dịch vụ: ' + facility.facilityName,
        imageUrl: facility.facilityImage,
        imageHeight: 250,
        imageWidth: 400
      });
      this.router.navigateByUrl('facility/list');
      console.log('Thêm mới dịch vụ thành công!');
    });
  }
}
