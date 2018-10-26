import { TestBed, inject } from '@angular/core/testing';

import { WeaponabilityService } from './weaponability.service';

describe('WeaponabilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeaponabilityService]
    });
  });

  it('should be created', inject([WeaponabilityService], (service: WeaponabilityService) => {
    expect(service).toBeTruthy();
  }));
});
