import { TestBed, inject } from '@angular/core/testing';

import { UniqueruleService } from './uniquerule.service';

describe('UniqueruleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniqueruleService]
    });
  });

  it('should be created', inject([UniqueruleService], (service: UniqueruleService) => {
    expect(service).toBeTruthy();
  }));
});
