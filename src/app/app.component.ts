import { Component } from '@angular/core';
import {HomeComponent} from'./home/home.component';
import { EmployeeComponent} from './employee/employee.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  
})
export class AppComponent {
 /* title = 'app';
  initialCount: number = 10;
  changeCount(event)
  {
    this.initialCount=event;
  }
*/    
pageHeader: string = 'Employee Details';
//alertMe(val)          //We are calling alert function from home.html//
//{
 // alert(val);
//}

show(event){
  alert(event);
}

  name ='ash';
  ash={
    name: "Ashish",
    surname: "Ahuja"
  };
}
