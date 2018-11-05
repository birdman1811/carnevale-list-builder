import { Keyword } from './keyword'
import { Uniquerule } from './uniquerule'
import { Specialrule } from './specialrule'
import { Weapon } from './weapon'
import { Observable, of } from 'rxjs';


export class CompleteCharacter{
    charId: number;
    name: string;
    charType: string;
    ducats: number;
    imageUrl: string;
    faction: string;
    actionpoints: number;
    attack: number;
    baseSize: number;
    commandpoints: number;
    dexterity: number;
    isUnique: boolean;
    lifepoints: number;
    mind: number;
    movement: number;
    protection: number;
    willpoints: number; 
    keywords: Keyword[];
    uniqueRules: Uniquerule[];
    specialrules: Specialrule[];
    weapons: Weapon[]
    factionIcon: string;
    


    constructor(charId, name, charType, ducats, imageUrl, faction, actionpoints, attack, baseSize, commandpoints, dexterity, isUnique, lifepoints, mind, movement, protection, 
    willpoints ){
        this.charId = charId;
        this.name = name;
        this.charType = charType;
        this.ducats = ducats;
        this.imageUrl = imageUrl;
        this.faction = faction;
        this.actionpoints = actionpoints;
        this.attack = attack;
        this.baseSize = baseSize;
        this.commandpoints = commandpoints;
        this.dexterity = dexterity;
        this.isUnique = isUnique;
        this.lifepoints = lifepoints;
        this.mind = mind;
        this.movement = movement;
        this.protection = protection;
        this.willpoints = willpoints;
        
    
    }

    

    stringofuniquerules(): string{
        var uniquerulesstring: string;
        uniquerulesstring = this.uniqueRules.join(", ")

        return uniquerulesstring;
    }

    stringofspecialrules(): string{
        var specialrulesstring: string;
        specialrulesstring = this.specialrules.join(", ")

        return specialrulesstring;
    }

    stringofkeywords(): string{
        var keywordstring: string;
        keywordstring = this.keywords.join(", ");
    
        return keywordstring;    
    }
    

}


