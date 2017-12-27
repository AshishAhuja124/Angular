import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DataTableModule} from "angular2-datatable";


@NgModule({
  imports: [
    CommonModule,DataTableModule
  ],
  declarations:[DashboardComponent],
  exports:[
    DashboardComponent
  ]})
  

export class DashboardModule { 

}
