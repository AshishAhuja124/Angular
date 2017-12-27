import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  styles: [`
  .home {
    position: relative;
  }
  input {
    border: 0;
    border-radius: 3px;
    height: 30px;
    max-width: 100px;
    text-align: center;
  }
  button {
    outline: 0;
    cursor: pointer;
    height: 30px;
    border: 0;
    border-radius: 3px;
    background: #0088cc;
    color: #fff;
  }
`],

})
export class HomeComponent implements OnInit {
  homeTitle="Welcome to Berkadia";
  myString="Iam intrested in angular";
  @Input('init')
  count: number = 0;
  @Output('update')
  change:EventEmitter<number>=new EventEmitter<number>();
  increment() {
    this.count++;
    this.change.emit(this.count);
  }
  decrement() {
    this.count--;
    this.change.emit(this.count);
    
  }
alertMe(val)          //We are calling alert function from home.html//
{
  alert(val);
}
ninja={
  name: "Ashish",
  surname: "Ahuja"
};

  constructor() { }

  ngOnInit() {
  }

}
