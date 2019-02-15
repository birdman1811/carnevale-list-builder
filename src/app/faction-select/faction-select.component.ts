import { Component, OnInit, OnDestroy } from '@angular/core';

import { FactionService } from '../faction.service';
import { Faction } from '../faction';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-faction-select',
  templateUrl: './faction-select.component.html',
  styleUrls: ['./faction-select.component.css']
})
export class FactionSelectComponent implements OnInit, OnDestroy {
  
  navigationSubscription;
  
  ngOnDestroy(): void {
    // avoid memory leaks here by cleaning up after ourselves. If we  
    // don't then we will continue to run our initialiseInvites()   
    // method on every navigationEnd event.
    if (this.navigationSubscription) {  
       this.navigationSubscription.unsubscribe();
    }
  }

  

  factions: Faction[];
  selectedFaction: Faction;

  onSelect(faction: Faction): void {
    this.selectedFaction = faction;    
  } 

  constructor(
    private factionService: FactionService,
    private router: Router,) {
      
   // subscribe to the router events - storing the subscription so
   // we can unsubscribe later. 

   this.navigationSubscription = this.router.events.subscribe((e: any) => {
    // If it is a NavigationEnd event re-initalise the component
    if (e instanceof NavigationEnd) {
      this.initialiseInvites();
    }
  });
     }

     initialiseInvites() {
      this.getFactions();
    }

  getFactions(): void {
    this.factionService.getFactions()
    .subscribe((factions) => this.factions = factions);
  }

  ngOnInit() {
    this.getFactions();
  }
  

}
