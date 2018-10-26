import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Faction} from './faction';


@Injectable({
  providedIn: 'root'
})
export class FactionService {

  private factionsUrl = 
'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.factions'
  
private factionUrl = '';

faction: Faction;

getFactions(): Observable<Faction[]> {
    return this.http.get<Faction[]>(this.factionsUrl)
  }

  getFaction(id: number): Observable<Faction> {
    
        
    if (id == 10){
    this.factionUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.factions/10';
    }
    if(id == 6){
      this.factionUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.factions/6'; 
    }
    if(id == 7){
      this.factionUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.factions/7';
    }
    if(id == 8 ){
      this.factionUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.factions/8';
    }
    if(id == 9 ){
      this.factionUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.factions/9';
    }
    if(id == 11){
      this.factionUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.factions/11';
    }
    if(id ==12){
      this.factionUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.factions/12';
    }
    return this.http.get<Faction>(this.factionUrl);
  }

  constructor(
    private http: HttpClient,
  ) { }
  
}


