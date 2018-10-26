import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CompleteCharacter } from '../completecharacter';

export interface DialogData {
  character: CompleteCharacter,
  }

@Component({
  selector: 'app-charactersheet',
  templateUrl: './charactersheet.component.html',  
  styleUrls: ['./charactersheet.component.css'],  
})
export class CharactersheetComponent  {  
  
  constructor(    
    public dialogRef: MatDialogRef<CharactersheetComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  } 
  
  }


 


