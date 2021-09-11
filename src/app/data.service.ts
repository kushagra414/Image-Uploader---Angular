import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private images:Array<any> = [];

  constructor() { }

  setImages(files: Array<any>){
    this.images = files;
  }

  getImages(){
    return this.images.slice();
    this.images = []
  }

  getImage(){
    return this.images[Math.floor(Math.random()*this.images.length)];
    this.images = []
  }
}
