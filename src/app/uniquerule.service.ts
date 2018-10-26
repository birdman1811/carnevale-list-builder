import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Uniquerule } from './uniquerule'

@Injectable({
  providedIn: 'root'
})
export class UniqueruleService {

  private uniqueruleurl =
  'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.uniqueruleview/findcharid/';

getUniqueRules(id: number): Observable<Uniquerule[]> {
  return this.http.get<Uniquerule[]>(this.uniqueruleurl+id)
}

  constructor(
    private http: HttpClient,
  ) { }
}
