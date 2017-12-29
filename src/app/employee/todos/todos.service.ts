import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import{Itodos} from './todos';

@Injectable()
export class todosService {
albums:any;

  constructor (private http: HttpClient ) {
}
getTodos(start,limit)
{
  const url = 'https://jsonplaceholder.typicode.com/todos/?_start='+start+'&'+'_limit='+limit;
  return this.http.get<Itodos[]>(url);
}
}