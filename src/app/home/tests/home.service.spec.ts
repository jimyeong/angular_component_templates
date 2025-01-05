import { TestBed } from '@angular/core/testing';

import { HomeServiceTsService } from '../services/home.service';

describe('HomeServiceTsService', () => {
  let service: HomeServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
