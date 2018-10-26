import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Weapon } from './weapon';
import { WeaponabilityService } from './weaponability.service';
import { WeaponAbility } from './weaponAbility'

@Injectable({
  providedIn: 'root'
})
export class WeaponService {  

weapons: Weapon[];


  private weaponsurl = 
  'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.weapons/';

  private weaponabilitiesurl =
  'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.weaponabilitiesview/findweaponid/';

getWeapons(id: number): Observable<Weapon[]> {
  
  return this.http.get<Weapon[]>(this.weaponsurl+id);
  
}

getweaponabilities(id: number): Observable<WeaponAbility[]> {
  return this.http.get<WeaponAbility[]>(this.weaponabilitiesurl+id);
}


  constructor(
    private http: HttpClient,
    
  ) { }
}
