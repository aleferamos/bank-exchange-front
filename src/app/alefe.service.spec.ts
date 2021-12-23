import { TestBed } from '@angular/core/testing';

import { AlefeService } from './alefe.service';

describe('AlefeService', () => {
  let service: AlefeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlefeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
