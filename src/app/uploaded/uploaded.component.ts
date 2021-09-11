import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploaded',
  templateUrl: './uploaded.component.html',
  styleUrls: ['./uploaded.component.css']
})
export class UploadedComponent implements OnInit {

  orgLink = 'https://youtu.be/SpYXISeKFPg/adsjkhasd/asdkajnsd/asd;kajsd/asdasjd';
  link = '';
  width = 10;
  dataService: DataService;
  router: Router;

  constructor(dataService: DataService, router: Router) {
    this.dataService = dataService;
    this.router = router;
  }

  ngOnInit(): void {
    var copyBtn = document.getElementById("copy-button") as HTMLElement;
    var upldContainer = document.getElementById("uploaded-container") as HTMLElement;
    var inputLink = document.getElementById("link") as HTMLElement;
    var image = document.getElementById("image") as HTMLImageElement;
    this.width = (upldContainer.offsetWidth) - copyBtn.offsetWidth;
    console.log("Width is: ", this.width);
    inputLink.style.width = this.width + "px";
    this.link = this.orgLink;
    image.src = URL.createObjectURL(this.dataService.getImage());
    if(this.orgLink.length > 30){
      this.link = this.orgLink.substring(0, 30) + "...";
    }
    // inputLink.style.height = copyBtn.offsetHeight + "px";
  }

  copyLink(){
    navigator.clipboard.writeText(this.orgLink);
  }

  @HostListener('window:popstate', ['$event'])
  onBrowserBackBtnClose(event: Event) {
      event.preventDefault(); 
      event.stopImmediatePropagation();
      event.stopPropagation();
      this.router.navigate(['/upload-image'],  {replaceUrl:true});
  }

}
