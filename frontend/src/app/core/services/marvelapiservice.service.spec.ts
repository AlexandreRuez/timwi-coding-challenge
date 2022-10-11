import { TestBed } from '@angular/core/testing';

import { MarvelApiserviceService } from './marvelapiservice.service';

describe('ApiserviceService', () => {
  let service: MarvelApiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelApiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
