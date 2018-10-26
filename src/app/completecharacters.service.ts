import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CompletecharacterService} from './completecharacter.service'
import { CompleteCharacter } from './completecharacter'
import { CarnevaleCharacter } from './carnevalecharacter'

@Injectable({
  providedIn: 'root'
})
export class CompletecharactersService {

  completecharacters: CompleteCharacter[];
  completechar: CompleteCharacter;

  /*getCompletedCharacters(initialcharacters: CarnevaleCharacter[])  {
    for (let CarnevaleCharacter of initialcharacters){
    this.completecharacters.push(this.completecharacterservice.completeCharacter(CarnevaleCharacter))    
    }
    return this.completecharacters;
  }*/

  constructor(
    private completecharacterservice: CompletecharacterService
  ) { }
}
