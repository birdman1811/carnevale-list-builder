import { CompleteCharacter } from "./completecharacter";
import { Type } from '@angular/core';
import { Equipment } from './equipment';
import { Error } from './error'


export class Gang{
characters: CompleteCharacter[];
name: string;
plannedDucats: number;
actualDucats: number;
faction: String;
errorreason: Error[];
isAcceptable: boolean = true;
equipment: Equipment[];
command: string;
leaders: CompleteCharacter[];
heroes: CompleteCharacter[];
henchmen: CompleteCharacter[];
gondolieres: number;
bridesOfDracule: number;
face: string = '../../assets/images/Happy_Face.png'
  

constructor() {
    this.actualDucats = 0;
    this.equipment = [];
    this.leaders = [];
    this.heroes = [];
    this.henchmen =[];
    this.gondolieres = 0;
    this.bridesOfDracule = 0;
}

addCharacter(char: CompleteCharacter){
    this.characters.push(char);
    this.actualDucats = this.actualDucats + char.ducats;
    this.checkAcceptable();
    this.SortCharacters();
    
}

getGangCost(): number {
    return this.actualDucats;
}

removeThisCharacter(char: CompleteCharacter){
    var element: number = 0;
    var removed: boolean = false;
    while (removed == false){
    for (let character of this.characters){
            if (char.name == character.name ){
            this.removeCharacter(element, char)            
            removed = true;  
            break;                     
            }
        element = element +1;            
        }
    }
        this.SortCharacters()
        
}

removeThisEquipment(item: Equipment){
    var element: number = 0;
    var removed: boolean = false;
    while (removed == false){
    for (let equipment of this.equipment){
        if (equipment.equipment == item.equipment){
            this.removeItem(element, item)
            removed = true;
            break;
        }
        element = element +1;
    }
}

}

addEquipment(item: Equipment){
    this.equipment.push(item);
    this.actualDucats = this.actualDucats + item.equipmentCost;
    this.checkAcceptable();
    
}

removeItem(index: number, item: Equipment){
    this.equipment.splice(index, 1);
    this.actualDucats = this.actualDucats - item.equipmentCost;
    this.checkAcceptable()
   
}

removeCharacter(index: number,  char: CompleteCharacter){
this.characters.splice(index, 1);
this.actualDucats = this.actualDucats - char.ducats;
this.checkAcceptable();

}

checkAcceptable(){
    this.errorreason = [];
    this.isAcceptable = true;
    this.finderror();    
    return this.isAcceptable;
}

getError(): Error[]{
    return this.errorreason;
}

finderror() {
    this.isAcceptable = true;
    this.errorreason = [];
    var leaders: number = 0;    
    var heroes: number = 0;
    var henchmen: number = 0;
    var giftedchar: number = 0;
    var otherfactionchars: number = 0;
    var fateused: number = 0;
    var justiceused: number = 0;
    this.gondolieres = 0;
    this.bridesOfDracule = 0;
    
for(let character of this.characters){
    if (character.charType == "Leader"){
        leaders = leaders +1;
    }
    if (character.charType == "Hero" ){
        heroes = heroes +1;
    }
    if (character.charType == "Henchman"){
        henchmen = henchmen +1;
    }
    if (character.faction == "The Gifted"){
        giftedchar = giftedchar +1;
    }
    if (character.faction != this.faction  && character.faction != "The Gifted"){
        otherfactionchars = otherfactionchars + 1;
    }
    if (character.name == "Fate"){
        fateused = fateused +1;
    }

    if (character.name == "Justice"){
        justiceused = justiceused +1;
    }

    if (character.name == "Gondolier"){
        this.gondolieres = this.gondolieres +1;        
    }

    if (character.name == "Bride of Dracula"){
        this.bridesOfDracule = this.bridesOfDracule +1;
    }

    var checkresult: boolean = false;
    if (character.isUnique == true){        
        console.log("Checking "+character.name);
        checkresult = this.checkUniquechar(character);
        
        if (checkresult == true){
            this.isAcceptable = false;
            
        }
        
        }
        if (checkresult == true){
            var overuseofuniquecharerror = new Error("You may only use one "+character.name+ ": ");
            this.isAcceptable = false;
            var duplicateerror: boolean = false;
            duplicateerror = this.checkduplicateerrorcode(overuseofuniquecharerror.error);
            if (duplicateerror == false){
                this.errorreason.push(overuseofuniquecharerror);
            }
        }

}
if (leaders > 1){
    this.isAcceptable = false;    
    var toomanyleaders = new Error("Too many Leaders, only one Leader allowed: ");    
    var duplicateerror: boolean = false;
    duplicateerror = this.checkduplicateerrorcode(toomanyleaders.error);
    if (duplicateerror == false){
        this.errorreason.push(toomanyleaders);
    }    
}

if (leaders == 0){
    this.isAcceptable = false;    
    var toofewleaders = new Error("Too few Leaders, at least one leader needed: ");
    
    var duplicateerror: boolean = false;
    duplicateerror = this.checkduplicateerrorcode(toofewleaders.error);
    if (duplicateerror == false){
        this.errorreason.push(toofewleaders);
    }
}
if (heroes > henchmen){        
        this.isAcceptable = false;        
        var toomanyheroes = new Error("More Heroes than Henchman, please remove heroes or add Henchmen: ");
        
        var duplicateerror: boolean = false;
        duplicateerror = this.checkduplicateerrorcode(toomanyheroes.error);
        if (duplicateerror == false){
            this.errorreason.push(toomanyheroes);
        }              
}

if (this.bridesOfDracule > 3){
    this.isAcceptable = false;
    var toomanybrides = new Error("You can have a maximum of 3 Brides of Dracula.");
    var duplicateerror:boolean = false;
    duplicateerror = this.checkduplicateerrorcode(toomanybrides.error);
    if (duplicateerror == false){
        this.errorreason.push(toomanybrides);
    }
}

if (otherfactionchars > 0){
    this.isAcceptable = false;
    var otherfactionerror = new Error( "You have selected other factions characters. This is allowed with gifted characters but not others. ");
    
    var duplicateerror: boolean = false;
    duplicateerror = this.checkduplicateerrorcode(otherfactionerror.error);
    if (duplicateerror == false){
        this.errorreason.push(otherfactionerror);
    }
    
}

if (fateused == 0 && justiceused >= 1 || fateused >= 1 && justiceused == 0){
    this.isAcceptable = false;
    var fatejusticeerror = new Error( "You must select Fate and Justice together.")
    var duplicateerror: boolean = false;
    duplicateerror = this.checkduplicateerrorcode(fatejusticeerror.error);
    if (duplicateerror == false){
        this.errorreason.push(fatejusticeerror);
    }
}


    
this.checkEquipment();


if (this.errorreason.length == 0){
    var legalgang = new Error("Gang Legal");
    this.isAcceptable = true;
    this.errorreason.push(legalgang);
}
   console.log(this.errorreason) ;
   this.SetFace();
}

checkUniquechar(char: CompleteCharacter): boolean{
    var isduplicated: boolean = false;
    var amountofchar: number = 0;
    
    for (let character of this.characters){
        if (character.name == char.name){
            
            amountofchar = amountofchar + 1;            
        }
        
    }

    if (amountofchar >= 2){
        isduplicated = true;
        this.isAcceptable = false;
        
    }


    return isduplicated;

}

checkEquipment():boolean {
var isacceptable: boolean = true;

for (let item of this.equipment){
    var isduplicated: boolean = this.checkDuplicatedItem(item);
    if (isduplicated == true){
        if (item.equipment == "Gondola"){
            var extragondolas: boolean = false;
            extragondolas = this.checkgondolas();
        }
        else {
        var duplicateitemerror = new Error("You can only use one "+item.equipment+": ");
        
        var duplicateerror: boolean = false;
        duplicateerror = this.checkduplicateerrorcode(duplicateitemerror.error);
            if (duplicateerror == false){
            this.isAcceptable = false;
            this.errorreason.push(duplicateitemerror);
            }
      }
        
    }

}

return isacceptable;
}

checkgondolas(): boolean{
var toomanygondolas: boolean = false;
var gondolas: number = 0;
var gondolasallowed: number = this.gondolieres +1;
for (let item of this.equipment){
    if (item.equipment == "Gondola"){
        gondolas = gondolas +1;
    }
}
if(gondolas > gondolasallowed){
    var duplicateitemerror = new Error("You have too many Gondolers");
        
        var duplicateerror: boolean = false;
        duplicateerror = this.checkduplicateerrorcode(duplicateitemerror.error);
            if (duplicateerror == false){
            this.isAcceptable = false;
            this.errorreason.push(duplicateitemerror);
            }
}


return toomanygondolas;
}

checkDuplicatedItem(checkItem: Equipment): boolean{
    var isduplicated: boolean = false;
    var numberofitem: number = 0;
    for (let item of this.equipment){
        if (item.equipment == checkItem.equipment){
            numberofitem = numberofitem + 1;            
        }
    }
    if (numberofitem >= 2){
        isduplicated = true;
    }

    return isduplicated
}

checkduplicateerrorcode(error: string): boolean{
    var isduplicate: boolean = false;
    for (let errorcode of this.errorreason){
        if (error == errorcode.error){
            isduplicate = true;
        }
        
    }
    return isduplicate;
}

resetgang(): void{
    this.characters = [];
    this.leaders = [];
    this.heroes = [];
    this.henchmen = [];    
    this.equipment = [];
    this.actualDucats = 0;
    this.checkAcceptable();
    this.errorreason = [];
    this.isAcceptable = true;
    this.SetFace();
    this.gondolieres = 0;
    this.bridesOfDracule = 0;
}

SetFace(){
    if (this.isAcceptable == true){
        this.face = "../../assets/images/Happy_Face.png"
    }
    if (this.isAcceptable == false){
        this.face = "../../assets/images/Sad_Face.png"
    }
} 

SortCharacters(){
    this.leaders = [];
    this.heroes = [];
    this.henchmen = [];
    
    for (let char of this.characters){
      if (char.charType == 'Leader' ){
        this.leaders.push(char)
        console.log(this.leaders);
      }
      if (char.charType == 'Hero' ){
        this.heroes.push(char)
      }
      if (char.charType == 'Henchman' ){
      this.henchmen.push(char)
      
      }
     
      }
   }

   
      
  }








