import { TestBed, inject } from '@angular/core/testing';

import { FactionService } from './faction.service';

describe('FactionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FactionService]
    });
  });

  it('should be created', inject([FactionService], (service: FactionService) => {
    expect(service).toBeTruthy();
  }));
});
