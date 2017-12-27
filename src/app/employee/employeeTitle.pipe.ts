import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'employeeTitle'//
})
export class EmployeeTitlePipe implements PipeTransform {
    transform(employees: any, search: any): any {
      if(search===undefined) return employees;
        return employees.filter(function(employee){
        return employee.name.toLowerCase().indexOf(search.toLowerCase())>-1;
        })
    //transform(value: string, gender: string): string {
      //  if (gender.toLowerCase() == "male")
       //     return "Mr." + value;
       // else
       //     return "Miss." + value;


    }
}