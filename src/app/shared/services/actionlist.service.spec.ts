import { TestBed } from '@angular/core/testing';

import { ActionlistService } from './actionlist.service';

describe('ActionlistService', () => {
  let service: ActionlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
