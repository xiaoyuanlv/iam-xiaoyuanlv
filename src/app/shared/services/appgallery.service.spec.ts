import { TestBed } from '@angular/core/testing';

import { AppgalleryService } from './appgallery.service';

describe('AppgalleryService', () => {
  let service: AppgalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppgalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
