import { TestBed } from '@angular/core/testing';

import { FacilityListService } from './facility-list.service';

describe('FacilityListService', () => {
  let service: FacilityListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacilityListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
