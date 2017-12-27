import { Component,Output,EventEmitter,Input,OnInit} from '@angular/core';
import { IEmployee } from './employee'; 
import{EmployeeService} from'./employee.service';

@Component({
    selector: 'list-employee',
    templateUrl: './employeeList.component.html',
    styleUrls: ['./employeeList.component.css'],
    providers:[EmployeeService]
})
export class EmployeeListComponent {
    employees : IEmployee[];


    alertMe(val)          //We are calling alert function from home.html//
    {
      alert(val);
    }
     

    constructor(private _employeeService: EmployeeService){
      this.employees=this._employeeService.getEmployees();
      
    }
    ngOnInit(){
        this.employees=this._employeeService.getEmployees();
        
    }
}