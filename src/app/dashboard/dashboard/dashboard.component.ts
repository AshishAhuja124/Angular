import { Component, OnInit } from '@angular/core';
import {IStudents} from './student'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
getStudents():IStudents[]{
  return[
    {
      "name":"Ashish",
      "branch":"cse",
      "preferredlang":"Python"
      
    },
    {
      "name":"Venky",
      "branch":"cse",
      "preferredlang":"C"   
    },
    {
      "name":"Sai",
      "branch":"cse",
      "preferredlang":"python"
      },
      {
      "name":"Rohan",
      "branch":"cse",
      "preferredlang":"c++"
      },
      {
      "name":"Sameed",
      "branch":"cse",
      "preferredlang":"c++"
      },
      {
      "name":"Ash",
      "branch":"cse",
      "preferredlang":"c"
      },
      {
      "name":"Rock",
      "branch":"cse",
      "preferredlang":"c"
      },
      {
      "name":"Amy",
      "branch":"cse",
      "preferredlang":"c"
      }
      
  ]
}
  constructor() { } 
    members: any[];
  ngOnInit():void {
    this.members=this.getStudents();
    console.log(this.members);
  }

}
