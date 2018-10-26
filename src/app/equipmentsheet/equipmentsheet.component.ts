import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Equipment } from '../equipment';

export interface DialogData {
  equipment: Equipment;
}

@Component({
  selector: 'app-equipmentsheet',
  templateUrl: './equipmentsheet.component.html',
  styleUrls: ['./equipmentsheet.component.css']
})

export class EquipmentsheetComponent{

  constructor(
    public dialogRef: MatDialogRef<EquipmentsheetComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

    onNoClick(): void {
      this.dialogRef.close();
    } 
  

}
