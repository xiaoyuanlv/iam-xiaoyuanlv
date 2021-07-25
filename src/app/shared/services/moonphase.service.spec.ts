import { TestBed } from '@angular/core/testing';

import { MoonphaseService } from './moonphase.service';

describe('MoonphaseService', () => {
  let service: MoonphaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoonphaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
