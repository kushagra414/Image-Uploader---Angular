import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  readonly allowedFormats = new Set(['png','jpg','jpeg']);
  readonly loadingTime = 2000;
  error = false;
  showLoader = false;
  router: Router;

  constructor(router: Router) {
    this.router = router;
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
      this.showLoader = true;
      setTimeout(()=>{
        this.showLoader = false;
        this.router.navigateByUrl('uploaded-successfully');
      }, this.loadingTime);
      //redirect to loading page. time taken on loading page = total number of files
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

}
