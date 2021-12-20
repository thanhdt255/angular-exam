import { TestBed } from '@angular/core/testing';

import { DataimageService } from './dataimage.service';

describe('DataimageService', () => {
  let service: DataimageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataimageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
