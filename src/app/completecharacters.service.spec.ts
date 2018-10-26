import { TestBed, inject } from '@angular/core/testing';

import { CompletecharactersService } from './completecharacters.service';

describe('CompletecharactersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompletecharactersService]
    });
  });

  it('should be created', inject([CompletecharactersService], (service: CompletecharactersService) => {
    expect(service).toBeTruthy();
  }));
});
