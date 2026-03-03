import { TestBed } from '@angular/core/testing';

import { GetExperienceService } from './get-experience.service';

describe('GetExperienceService', () => {
  let service: GetExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
