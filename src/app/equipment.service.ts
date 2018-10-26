import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Equipment } from './equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  private equipmentUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.equipment'

  getAllEquipment(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(this.equipmentUrl);
  }

  getSingleEquipment(id: number): Observable<Equipment>{
    return this.http.get<Equipment>(this.equipmentUrl+"/"+id)
  }

  constructor(
    private http: HttpClient,
  ) { }
}
