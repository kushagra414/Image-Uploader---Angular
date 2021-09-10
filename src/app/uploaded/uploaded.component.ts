import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploaded',
  templateUrl: './uploaded.component.html',
  styleUrls: ['./uploaded.component.css']
})
export class UploadedComponent implements OnInit {

  orgLink = 'https://youtu.be/SpYXISeKFPg/adsjkhasd/asdkajnsd/asd;kajsd/asdasjd';
  link = '';
  width = 10;

  constructor() { }

  ngOnInit(): void {
    var copyBtn = document.getElementById("copy-button") as HTMLElement;
    var upldContainer = document.getElementById("uploaded-container") as HTMLElement;
    var inputLink = document.getElementById("link") as HTMLElement;
    this.width = (upldContainer.offsetWidth) - copyBtn.offsetWidth;
    console.log("Width is: ", this.width);
    inputLink.style.width = this.width + "px";
    this.link = this.orgLink;
    if(this.orgLink.length > 30){
      this.link = this.orgLink.substring(0, 30) + "...";
    }
    // inputLink.style.height = copyBtn.offsetHeight + "px";
  }

  copyLink(){
    navigator.clipboard.writeText(this.orgLink);
  }

}
