import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, NgModule} from '@angular/core';
import {CommonModule, NgClass} from '@angular/common';
import {AppComponent} from '../../app.component';
import {GetSkillsService} from '../../services/get-skills.service';
import { HttpResponse } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent {
  constructor(public appComponent: AppComponent,
              private getSkills: GetSkillsService) {
  }

  public skills : any[] = []

  ngOnInit() {
    this.getSkills.GetSkills().subscribe({
      next: data => {
        if (data.code === 200) {
          this.skills = data.data;
        }
      }
    });
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
