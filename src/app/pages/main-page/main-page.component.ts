import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, NgModule} from '@angular/core';
import {CommonModule, NgClass} from '@angular/common';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-main-page',
  imports: [
    CommonModule,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent {
  constructor(public appComponent: AppComponent) {
  }

  @ViewChild('defaultProjectButton') defaultButtonRef: ElementRef | undefined;

  activeFilter: string = 'all';

  OnClickGithub() {
    window.open('https://github.com/TheotimAlberteau', '_blank');
  }

  OnClickLinkedin() {
    window.open('https://www.linkedin.com/in/théotim-alberteau/', '_blank');
  }

  OnClickFilter(filterName: string): void {
    this.activeFilter = filterName;
  }
}
