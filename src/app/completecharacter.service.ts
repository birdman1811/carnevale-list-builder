import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CarnevaleCharacter } from './carnevalecharacter';
import { Weapon } from './weapon';
import { WeaponAbility } from './weaponAbility';
import { Uniquerule } from './uniquerule';
import { Specialrule } from './specialrule';
import { Keyword } from './keyword';
import { CompleteCharacter } from './completeCharacter';
import { CarnevalecharacterService } from './carnevalecharacter.service';
import { KeywordService } from './keyword.service';
import { SpecialruleService } from './specialrule.service';
import { UniqueruleService } from './uniquerule.service';
import { WeaponService } from './weapon.service';
import { WeaponabilityService } from './weaponability.service'



@Injectable({
  providedIn: 'root'
})
export class CompletecharacterService {

  
  keywords: Keyword[];
  specialrules: Specialrule[];
  uniquerules: Uniquerule[];
  weaponabilities: WeaponAbility[];
  weapons: Weapon[]
  carnevaleCharacter: CarnevaleCharacter;

  completeCharacter(character: CarnevaleCharacter) {
    
    var charId =  character.charId;
    var name = character.name;
    var charType = character.charType;
    var ducats = character.ducats;
    var imageUrl = character.imageUrl;
    var faction = character.faction;
    var actionpoints = character.actionpoints;
    var attack = character.attack;
    var baseSize = character.baseSize;
    var commandpoints = character.commandpoints;
    var dexterity = character.dexterity;
    var isUnique = character.isUnique;
    var lifepoints = character.lifepoints;
    var mind = character.mind;
    var movement = character.movement;
    var protection = character.protection;
    var willpoints = character.willpoints;    
     
    
    var charactercomplete: CompleteCharacter = new CompleteCharacter(charId, name, charType, ducats, imageUrl, faction, actionpoints, attack, baseSize, commandpoints, dexterity,
    isUnique, lifepoints, mind, movement, protection, willpoints )

      
    
    return charactercomplete;
    
    
  }

  getWeaponAbilities(weapon: Weapon): void{

    this.weaponservice.getweaponabilities(weapon.weaponId)
    .subscribe((weaponabilities) => weapon.weaponAbilities = weaponabilities)
  }

  getWeapons(id: number)  {
    var newweapons = new Array;
    this.weaponservice.getWeapons(id)
    .subscribe(weapons =>{
    newweapons = weapons;
    for (let Weapon of this.weapons){
      this.getWeaponAbilities(Weapon);
    }
    return newweapons;
    });
  }

  getKeywords(id: number) {   
    
    this.keywordservice.getKeywords(id)
    .subscribe(keywords =>
    {                  
       for (let Keyword of keywords ){
         this.addtoKeywords(Keyword);
       }
       console.log("too late", this.keywords);
             
      });
  return this.keywords;
  }

  addtoKeywords(keyword: Keyword) {
    var newKeyWord = new Keyword(keyword.charId, keyword.keyInstId, keyword.keyword, keyword.name)
    this.keywords.push(newKeyWord);
  }

  getSpecialrules(id: number) {
    var newspecialrules = new Array;
    this.specialrulesservice.getSpecialRules(id)
    .subscribe(specialrules =>{
       newspecialrules = specialrules;
       return newspecialrules;
      });
  }

  getUniquerules(id: number) {
    var newuniquerules = new Array;
    this.uniqueruleservice.getUniqueRules(id)
    .subscribe(uniquerules => {
       newuniquerules = uniquerules;
       return newuniquerules;
      });
  }

  constructor(
    private carnevalecharacterservice: CarnevalecharacterService,
    private keywordservice: KeywordService,
    private specialrulesservice: SpecialruleService,
    private uniqueruleservice: UniqueruleService,
    private weaponservice: WeaponService,
    private weaponabilityservice: WeaponabilityService,
    
  ) { 
    this.keywords = [];
    this.specialrules =[];
    this.weapons =[];
    this.weaponabilities =[];
    this.uniquerules =[];
  }


}
