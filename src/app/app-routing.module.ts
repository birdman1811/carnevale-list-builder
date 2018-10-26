import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BuilderComponent} from './builder/builder.component'
import {FactionSelectComponent} from './faction-select/faction-select.component';



const routes: Routes = [
  { path: '', redirectTo: '/faction-select', pathMatch: 'full', runGuardsAndResolvers: 'always'},
  { path: 'faction-select', component: FactionSelectComponent, runGuardsAndResolvers: 'always' },  
  { path: 'builder/:factionId', component: BuilderComponent, runGuardsAndResolvers: 'always'},
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}) ],
  exports: [ RouterModule ]    
  
})
export class AppRoutingModule { }
