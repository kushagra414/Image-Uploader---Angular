import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Helper } from '../helper';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  readonly allowedFormats = new Set(['png','jpg','jpeg']);
  error = false;
  router: Router;
  dataService: DataService;

  constructor(router: Router, dataService: DataService) {
    this.router = router;
    this.dataService = dataService;
  }

  ngOnInit(): void {
  }

  onFilesDropped(files: any){
    this.prepareFiles(files);
  }

  fileBrowseHandler(event: any){
    this.prepareFiles(event.target.files);
  }

  prepareFiles(files: Array<any>) {
    let allowed = this.checkFormat(files);
    if(allowed[0]){
      this.error = false;
      this.dataService.setImages(files);
      Helper.isNextStep = true;
      this.router.navigate(['loading'], { skipLocationChange: true });
      //redirect to loading page.
    }else{
      this.error = true;
    }
  }

  checkFormat(files: Array<any>) {
    for(let i=0;i<files.length;i++){
      if(!this.allowedFormats.has(files[i].name.split(".").at(-1))){
        return [false, files[i].name.split(".").at(-1)];
      }
    }
    return [true];
  }

  @HostListener('window:popstate', ['$event'])
  onBrowserBackBtnClose(event: Event) {
      event.preventDefault(); 
      event.stopImmediatePropagation();
      event.stopPropagation();
      this.router.navigate(['/upload-image'],  {replaceUrl:true});
  }

}
