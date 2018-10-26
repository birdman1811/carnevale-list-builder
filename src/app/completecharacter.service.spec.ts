import { TestBed, inject } from '@angular/core/testing';

import { CompletecharacterService } from './completecharacter.service';

describe('CompletecharacterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompletecharacterService]
    });
  });

  it('should be created', inject([CompletecharacterService], (service: CompletecharacterService) => {
    expect(service).toBeTruthy();
  }));
});
