import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { WeaponInstance } from './weaponinstance';


@Injectable({
  providedIn: 'root'
})
export class WeaponinstanceService {

  private weaponsurl = 
  'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.weaponinstancesview/findcharid/';

  getWeapons(id: number): Observable<WeaponInstance[]> {
  
    return this.http.get<WeaponInstance[]>(this.weaponsurl+id);
    
  }

  constructor(
    private http: HttpClient,
  ) { }
}
