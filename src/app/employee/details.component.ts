import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';
import { IEmployee } from './employee';
@Component({
  selector: 'app-edit-player',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id : number;
  player : any;

  constructor(private _route: ActivatedRoute, private _employeeService: EmployeeService) {

   }

  ngOnInit() : void {
    this.id=this._route.snapshot.params["code"];
    this.player=this._employeeService.getEmployees().find(c => c.code == this.id);

  
  }
}
