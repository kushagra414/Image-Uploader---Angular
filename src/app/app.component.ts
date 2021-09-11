import { Component } from '@angular/core';
import { Helper } from './helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'image-uploader';
  constructor() {
    Helper.isNextStep = false;
  }
}
