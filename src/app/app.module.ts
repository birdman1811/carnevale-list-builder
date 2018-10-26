import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { TitleComponent } from './title/title.component';
import { SummaryComponent } from './summary/summary.component';
import { FactionSelectComponent } from './faction-select/faction-select.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { BuilderComponent } from './builder/builder.component';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { CharactersheetComponent } from './charactersheet/charactersheet.component';
import { EquipmentsheetComponent } from './equipmentsheet/equipmentsheet.component';
import { GangprintoutComponent } from './gangprintout/gangprintout.component';






@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,       
    SummaryComponent,
    FactionSelectComponent,    
    FooterComponent,   
    BuilderComponent,
    CharactersheetComponent,
    EquipmentsheetComponent,
    GangprintoutComponent,    
  ],
  imports:[
 CommonModule,
NgtUniversalModule,    
    AppRoutingModule,
    HttpClientModule,
    ModalDialogModule,    
    BrowserAnimationsModule,
    MatDialogModule, 
    FormsModule,    
  ],  
  exports: [MatDialogModule],
  providers: [],
  entryComponents: [CharactersheetComponent, EquipmentsheetComponent, GangprintoutComponent], 
  
   
})
export class AppModule { }
