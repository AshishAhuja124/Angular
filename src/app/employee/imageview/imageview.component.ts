import { Component, OnInit } from '@angular/core';
import { ImageService } from './imageview.service';
import {IAlbum} from '../inter';
@Component({
  selector: 'app-imageview',
  templateUrl: './imageview.component.html',
  styleUrls: ['./imageview.component.css']
})
export class ImageviewComponent implements OnInit {
    start : number;
    limit : number;
    imageList: IAlbum[];
    currenturl : string;
  
    constructor(private _imageService: ImageService) {
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
      this._imageService.getImages(this.start, this.limit).subscribe((res:IAlbum[]) =>{
        this.imageList = res;
      });
     }
    ngOnInit() {
      this.display();    
   }
  
  }
 