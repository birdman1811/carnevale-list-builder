import { TestBed, inject } from '@angular/core/testing';

import { CarnevalecharacterService } from './carnevalecharacter.service';

describe('CarnevalecharacterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarnevalecharacterService]
    });
  });

  it('should be created', inject([CarnevalecharacterService], (service: CarnevalecharacterService) => {
    expect(service).toBeTruthy();
  }));
});
