import { TestBed } from '@angular/core/testing';

import { AvonService } from './avon.service';

describe('AvonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvonService = TestBed.get(AvonService);
    expect(service).toBeTruthy();
  });
});
