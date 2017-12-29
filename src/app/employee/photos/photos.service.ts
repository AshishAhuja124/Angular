import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{IPhoto} from '../photo';
@Injectable()
export class PhotoService {
photos:any;

  constructor (private http: HttpClient ) {
}
getPhotos(start,limit)
{
  const url = 'https://jsonplaceholder.typicode.com/albums/?_start='+start+'&'+'_limit='+limit;
  return this.http.get<IPhoto[]>(url);
}
}