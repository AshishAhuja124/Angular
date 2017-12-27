import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import{IAlbum} from '../inter';

@Injectable()
export class ImageService {
albums:any;

  constructor (private http: HttpClient ) {
}
getImages(start,limit)
{
  const url = 'https://jsonplaceholder.typicode.com/photos/?_start='+start+'&'+'_limit='+limit;
  return this.http.get<IAlbum[]>(url);
}
}