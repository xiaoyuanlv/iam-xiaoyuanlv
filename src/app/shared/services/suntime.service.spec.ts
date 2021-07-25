import { TestBed } from '@angular/core/testing';

import { SuntimeService } from './suntime.service';

describe('SuntimeService', () => {
  let service: SuntimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuntimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
