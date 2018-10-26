import { TestBed, inject } from '@angular/core/testing';

import { WeaponinstanceService } from './weaponinstance.service';

describe('WeaponinstanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeaponinstanceService]
    });
  });

  it('should be created', inject([WeaponinstanceService], (service: WeaponinstanceService) => {
    expect(service).toBeTruthy();
  }));
});
