import { Component } from '@angular/core';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(public appComponent: AppComponent) {
  }

  OnClickGithub() {
    window.open('https://github.com/TheotimAlberteau', '_blank');
  }

  OnClickLinkedin() {
    window.open('https://www.linkedin.com/in/théotim-alberteau/', '_blank');
  }


}
