import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Specialrule } from './specialrule'

@Injectable({
  providedIn: 'root'
})
export class SpecialruleService {

  private specialruleurl =
  'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.specialruleview/findcharid/'

getSpecialRules(id: number): Observable<Specialrule[]> {
  return this.http.get<Specialrule[]>(this.specialruleurl+id)
}

  constructor(
    private http: HttpClient,
  ) { }
}
