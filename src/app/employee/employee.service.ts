import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
export class EmployeeService {
    getEmployees(): IEmployee[] {
        return [
            { code: 101, name: 'Ashish', gender: 'Male', annualSalary: 5500, dateOfBirth: '2/6/1988',percentage:75 },
            { code: 102, name: 'Venky', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982',percentage:76 },
            { code: 103, name: 'Bharath', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979',percentage:77 },
            { code: 104, name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '4/10/1980',percentage:65 },
            { code: 105, name: 'Abhi', gender: 'Female', annualSalary: 6520.826, dateOfBirth: '2/10/2000',percentage:85 },
            { code: 106, name: 'Nihal', gender: 'Male', annualSalary: 4500, dateOfBirth: '1/8/1979',percentage:80 },
            { code: 107, name: 'Shravan', gender: 'Male', annualSalary: 3300, dateOfBirth: '12/4/1909',percentage:70 },
            { code: 108, name: 'Anurag', gender: 'Male', annualSalary: 8500, dateOfBirth: '12/8/1979',percentage:69 },
            { code: 109, name: 'Akhil', gender: 'Male', annualSalary: 5600, dateOfBirth: '11/11/1979',percentage:71 },
        ]
    }
}

