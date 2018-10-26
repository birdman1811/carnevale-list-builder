import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {CarnevaleCharacter} from './carnevalecharacter';


@Injectable({
  providedIn: 'root'
})
export class CarnevalecharacterService {

  private charactersUrl = '';

  getCharacters(factionId: number): Observable<CarnevaleCharacter[]> {

    if (factionId == 6){
      this.charactersUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.guildcharacterview'
    }

    if (factionId == 7){
      this.charactersUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.rashaarcharacterview'
    }

    if (factionId == 8){
      this.charactersUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.doctorscharacterview'
    }

    if (factionId == 9){
      this.charactersUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.patricianscharacterview'
    }

    if (factionId == 10){
      this.charactersUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.vaticancharacterview'
    }

    if (factionId == 11){
      this.charactersUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.strigoicharacterview'
    }

    if (factionId == 12){
      this.charactersUrl = 'http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.giftedcharacterview'
    }

    return this.http.get<CarnevaleCharacter[]>(this.charactersUrl)
   
  }

  

  constructor(
    private http: HttpClient,
  ) { }
}
