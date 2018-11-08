import { Component, OnInit, ViewContainerRef, ComponentRef, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';

import { FactionService } from '../faction.service';
import { Faction } from '../faction';
import { Gang } from '../gang';
import { Equipment } from '../equipment';
import { CarnevaleCharacter } from '../carnevalecharacter';
import { CarnevalecharacterService } from '../carnevalecharacter.service';
import { CharactersheetComponent} from '../charactersheet/charactersheet.component';
import { CompleteCharacter } from '../completecharacter';
import { CompletecharacterService } from '../completecharacter.service';
import { KeywordService } from '../keyword.service'
import { SpecialruleService } from '../specialrule.service';
import { UniqueruleService } from '../uniquerule.service';
import { WeaponService} from '../weapon.service';
import { WeaponinstanceService } from '../weaponinstance.service';
import { EquipmentService } from '../equipment.service';
import { EquipmentsheetComponent } from '../equipmentsheet/equipmentsheet.component';
import { Specialrule } from '../specialrule';


@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

 faction: Faction;
 initialcharacters: CarnevaleCharacter[];
 selectedCharacter: CompleteCharacter;
 characterSheetRef: MatDialogRef<CharactersheetComponent>;
 character: CompleteCharacter;
 gang: Gang;
 characters: CompleteCharacter[];
 leaderlist: CompleteCharacter[];
 herolist: CompleteCharacter[];
 henchmenlist: CompleteCharacter[];
 gangaccepted: boolean;
 factions: Faction[];
 equipment: Equipment;
 equipmentList: Equipment[];
 selectedEquipment: Equipment;


 /*Method called when a character is selected*/ 
  onSelect(clickedcharacter: CompleteCharacter): void {
    this.selectedCharacter = clickedcharacter;
    this.openCharacterSheet(this.selectedCharacter);
          
  }


  /*Method called when the faction is changed via the faction icons.  
   */
    onFactionSelect(faction: Faction){
    this.faction = faction;
    this.initialcharacters = [];
    this.characters = [];
    this.leaderlist = [];
    this.herolist = [];
    this.henchmenlist =[];
    this.equipmentList =[];
    this.getCompleteCharacters();
    this.getEquipmentList();
  }

  onEquipmentClick(clickedEquipment: Equipment): void {
    this.selectedEquipment = clickedEquipment;
    this.openEquipmentSheet(this.selectedEquipment);
  }

  constructor(
    private route: ActivatedRoute,
    private factionService: FactionService,    
    private carnevaleCharacterService: CarnevalecharacterService,
    private chardialog: MatDialog,
    private itemdialog: MatDialog,
    private completecharacterservice: CompletecharacterService,
    private keywordservice: KeywordService,
    private specialruleservice: SpecialruleService,
    private uniqueruleservice: UniqueruleService,
    private weaponservice: WeaponService,    
    private weaponinstanceservice: WeaponinstanceService,
    private equipmentservice: EquipmentService,
    
    ) { 
      this.characters = [];
      this.leaderlist = [];
      this.herolist = [];
      this.henchmenlist = [];
      this.gang = new Gang();
      this.gang.characters = [];
      this.gang.actualDucats = 0;
      this.gangaccepted = false;
      this.faction = new Faction();
      this.gang.name = "New Gang";
    }

  /* Method called to complete the characters using all tables needed from the API
   */
  getCompleteCharacters(): void {    
        
    this.carnevaleCharacterService.getCharacters(this.faction.factionId)    
    .subscribe(initcharacters =>{ 
      this.initialcharacters = initcharacters;      
      for (let CarnevaleCharacter of this.initialcharacters){
        var newchar = (this.completecharacterservice.completeCharacter(CarnevaleCharacter));
        
        this.addToCharacters(newchar);
        
      }
      this.spltListbyCharType();  
        
  })};

  ngOnInit(): void { 
    this.getFactions();   
    this.getFaction();   
    
  }

  /*Adds each character to the character list. */
  addToCharacters(char: CompleteCharacter) {
    var newchar = new CompleteCharacter(char.charId, char.name, char.charType, char.ducats, char.imageUrl, char.faction, char.actionpoints, char.attack,
    char.baseSize, char.commandpoints, char.dexterity, char.isUnique, char.lifepoints, char.mind, char.movement, char.protection,
  char.willpoints)
    
    this.characters.push(newchar);
    
  }


  /* Callback HELL since we need all this data populated before calling the pop up
  we enter callback hell, over time look at developing a better technique for this, or
  modifying the API to deliver it all in one call.*/
  openCharacterSheet(selectedCharacter: CompleteCharacter) {    
    var keywordslist = [];
    var specialruleslist = [];
    var uniquerules = [];
    var weaponsinstanceslist = [];
    var weaponslist = [];
    var weaponabilitieslist = [];
        this.keywordservice.getKeywords(selectedCharacter.charId)
        .subscribe(keywords =>{
          keywordslist = keywords;
          selectedCharacter.keywords = keywordslist;
          this.specialruleservice.getSpecialRules(selectedCharacter.charId)
          .subscribe(specrules =>{
            specialruleslist = specrules;
            selectedCharacter.specialrules = specialruleslist;
            this.uniqueruleservice.getUniqueRules(selectedCharacter.charId)
            .subscribe(unirules => {
              uniquerules = unirules;
              selectedCharacter.uniqueRules = uniquerules;
              this.weaponinstanceservice.getWeapons(selectedCharacter.charId)
              .subscribe(weaponsinst => {
                weaponsinstanceslist = weaponsinst;
                for (let WeaponInstance of weaponsinstanceslist){                  
                  this.weaponservice.getWeapons(WeaponInstance.weapon)
                  .subscribe(weapon =>{
                    weaponslist.push(weapon);
                    for (let Weapon of weaponslist){
                      
                      this.weaponservice.getweaponabilities(Weapon.weaponId)
                        .subscribe(weaponabilities =>{
                          weaponabilitieslist = weaponabilities
                          Weapon.weaponAbilities = weaponabilitieslist;
                          
                        })
                    }
                    
                  })
                }  
                for (let Weapon of weaponslist){
                  
                  this.weaponservice.getweaponabilities(Weapon.weaponId)
                    .subscribe(weaponabilities =>{
                      Weapon.weaponAbilities = weaponabilities;
                      
                    })
                }
                 selectedCharacter.weapons = weaponslist;                     
                
              })
              
            })
            
          })          
          
        })       

        const dialogRef =this.chardialog.open(CharactersheetComponent,       
          {hasBackdrop: true,
            
            data: {character: selectedCharacter},
            panelClass: "charactersheetbox",
            backdropClass: "backdropcustom",
            }  
        );
    
        /* Closing dialog code. True, character gets added, false nothing happens.*/
        dialogRef.afterClosed().subscribe(result => {
         
          if (result == true){
            this.gang.addCharacter(selectedCharacter);
            
          }
          if (result == false){
            var element = 0;
            for (let CompleteCharacter of this.gang.characters){              
              if (selectedCharacter.charId == CompleteCharacter.charId){
                this.gang.removeCharacter(element, CompleteCharacter);
                break;
              }
              else{
                
              }
              element = element +1; 
            }
          }
        });
    this.SetFactionIcon(selectedCharacter);
    
  }

  

  /* Due to API design, to give characters a faction Icon we have to hard code them in for now. Look to improve for future.*/
  SetFactionIcon(char: CompleteCharacter){
    if (char.faction == 'The Guild'){
      char.factionIcon = 	"http://www.webapp.carnevalegame.com/carnevale-list-builder/assets/images/factionicons/The%20Guild.png"
    }
    if (char.faction == 'Rashaar'){
      char.factionIcon = "http://www.webapp.carnevalegame.com/carnevale-list-builder/assets/images/factionicons/Rashaar.png"
    }
    if (char.faction == 'The Doctors'){
      char.factionIcon = "http://www.webapp.carnevalegame.com/carnevale-list-builder/assets/images/factionicons/The%20Doctors.png"
    }
    if (char.faction == 'The Patricians'){
      char.factionIcon = "http://www.webapp.carnevalegame.com/carnevale-list-builder/assets/images/factionicons/Patricians.png"
    }
    if (char.faction == 'The Vatican'){
      char.factionIcon = 	"http://www.webapp.carnevalegame.com/carnevale-list-builder/assets/images/factionicons/The%20Vatican.png"
    }
    if (char.faction == 'Strigoi'){
      char.factionIcon = "http://www.webapp.carnevalegame.com/carnevale-list-builder/assets/images/factionicons/Strigoi.png"
    }
    if (char.faction == 'The Gifted'){
      char.factionIcon = "http://www.webapp.carnevalegame.com/carnevale-list-builder/assets/images/factionicons/Gifted.png"
    }
  }


  /*Quite simple opens the equipment pop up. */
  openEquipmentSheet(Item: Equipment){
    const itemdialogRef =this.itemdialog.open(EquipmentsheetComponent,
    {hasBackdrop: true, 
    data: {equipment: Item},
    panelClass: "charactersheetbox",
            backdropClass: "backdropcustom",
  }
);

    itemdialogRef.afterClosed().subscribe(result => {
      
      if (result == true){
        this.gang.addEquipment(Item);
      }
      if (result == false){
        var element =0;
        for (let equipment of this.gang.equipment){
          if (this.selectedEquipment.equipmentId == equipment.equipmentId ){
            this.gang.removeItem(element, equipment);
            break;
          }
          else{
            
          }
          element = element +1;
        }
      }
    });
  }


  /* Breaks characterlist down into character types for display. */
  spltListbyCharType(){
    for (let CompleteCharacter of this.characters){
      if (CompleteCharacter.charType == 'Leader'){
        this.leaderlist.push(CompleteCharacter);
      }
      if (CompleteCharacter.charType == 'Hero'){
        this.herolist.push(CompleteCharacter);
      }
      if (CompleteCharacter.charType == 'Henchman'){
        this.henchmenlist.push(CompleteCharacter);
      }
    }
  }

  /*Gets the main faction for the gang being built. This is called upon loading
  by the NgOnInIt*/  
  getFaction(): void {    
    const id = +this.route.snapshot.paramMap.get('factionId');
     this.factionService.getFaction(id)
    .subscribe(faction => {this.faction = faction;
      this.getCompleteCharacters(); 
      this.gang.faction = this.faction.faction;
      this.gang.command = this.faction.factionCommand;
      this.getEquipmentList();       
    });
      
  }

  /*This gets the list of factions */
  getFactions(): void {
    this.factionService.getFactions()
    .subscribe(factions => {
      this.factions = factions;
    })
  }

  /*This gets the list of equipment from the API. */
  getEquipmentList(): void {
    this.equipmentservice.getAllEquipment()
    .subscribe(equipment => {
      this.equipmentList = equipment;
    })
  }

  


}


