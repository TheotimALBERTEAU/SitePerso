import { TestBed } from '@angular/core/testing';

import { GetEducationService } from './get-education.service';

describe('GetEducationService', () => {
  let service: GetEducationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEducationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
