import { Component, OnInit } from '@angular/core';
import{IPhoto} from '../photo';
import {PhotoService} from './photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  start:number;
  limit:number;
  imageList: IPhoto[];
  currenturl : string;

  constructor(private _photoService: PhotoService) { 
    this.start = 0;
    this.limit = 10;
    
  }
  updateLimit(val){
    this.start=0;
    this.limit=val;
    this.display();
  }
  currentImage(currenturl){
    this.currenturl=currenturl;
  }
  display(){
    this._photoService.getPhotos(this.start, this.limit).subscribe((res:IPhoto[]) =>{
      this.imageList = res;
    });
   }

  ngOnInit() {
    this.display();    
    
  }

}
