import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Helper } from '../helper';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  router: Router;
  readonly loadingTime = 2000;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    setTimeout(()=>{
      Helper.isNextStep = true;
      this.router.navigate(['uploaded-successfully'], { skipLocationChange: true });
    }, this.loadingTime);
    //redirect to loading page. time taken on loading page = total number of files
  }

  @HostListener('window:popstate', ['$event'])
  onBrowserBackBtnClose(event: Event) {
      event.preventDefault(); 
      event.stopImmediatePropagation();
      event.stopPropagation();
      this.router.navigate(['/upload-image'],  {replaceUrl:true});
  }

}
