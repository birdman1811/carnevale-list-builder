import { TestBed, inject } from '@angular/core/testing';

import { SpecialruleService } from './specialrule.service';

describe('SpecialruleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpecialruleService]
    });
  });

  it('should be created', inject([SpecialruleService], (service: SpecialruleService) => {
    expect(service).toBeTruthy();
  }));
});
