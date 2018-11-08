import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
import { Router, NavigationEnd } from '@angular/router';

import { Gang } from '../gang'
import { GangprintoutComponent } from '../gangprintout/gangprintout.component'
import { Faction } from '../faction';
import { CompleteCharacter } from '../completecharacter';
import { Equipment } from '../equipment';



@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  gangprintoutref: MatDialogRef<GangprintoutComponent>;

  @Input() gang: Gang; 
  @Input() faction: Faction;

  
  gangerrorreason: string = "";   

  
  constructor(
    private gangsheetdialog: MatDialog,
    private router: Router,
  ) {    
    
   }

   printgang(): void {
     
    const gangsheetdialogRef = this.gangsheetdialog.open(GangprintoutComponent,
    {hasBackdrop: true,
      
    data: {gang: this.gang},
  }
);  
  
  }

  resetgang():void{
    this.gang.resetgang();
  }

  ngOnInit() {
  }

  delete(char: CompleteCharacter):void{
    this.gang.removeThisCharacter(char);
  }

  deleteequipment(item: Equipment):void{
    this.gang.removeThisEquipment(item);
  }

  ChangeMainFaction(){
    this.router.navigateByUrl('/faction-select')
  }

  

  
}

