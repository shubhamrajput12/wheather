import { TestBed } from '@angular/core/testing';

import { WheatherdataService } from './wheatherdata.service';

describe('WheatherdataService', () => {
  let service: WheatherdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WheatherdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
