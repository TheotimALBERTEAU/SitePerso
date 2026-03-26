import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, NgModule} from '@angular/core';
import {CommonModule, NgClass} from '@angular/common';
import {AppComponent} from '../../app.component';
import {GetSkillsService} from '../../services/get-skills.service';
import {GetProjectService} from '../../services/get-project.service';
import { HttpResponse } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import {filter} from 'rxjs';
import {GetExperienceService} from '../../services/get-experience.service';
import {GetEducationService} from '../../services/get-education.service';
import {RouterLink} from '@angular/router';

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
              private getSkills: GetSkillsService,
              private getProjects: GetProjectService,
              private getExperiences: GetExperienceService,
              private getEducation: GetEducationService) {
  }

  public skills : any[] = []
  public projects : any[] = []
  public categories : any[] = []
  public experiences : any[] = []
  public educations : any[] = []

  ngOnInit() {
    this.getSkills.GetSkills().subscribe({
      next: data => {
        if (data.code === 200) {
          this.skills = data.data;
        }
      }
    });

    this.getProjects.GetProjects().subscribe({
      next: data => {
        if (data.code === 200) {
          this.projects = data.data;
        }
      }
    });

    this.getProjects.GetCategories().subscribe({
      next: data => {
        if (data.code === 200) {
          this.categories = data.data;
        }
      }
    });

    this.getExperiences.GetExperiences().subscribe({
      next: data => {
        if (data.code === 200) {
          this.experiences = data.data;
        }
      }
    });

    this.getEducation.GetEducation().subscribe({
      next: data => {
        if (data.code === 200) {
          this.educations = data.data;
        }
      }
    })
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

    if (filterName === 'all') {
      this.getProjects.GetProjects().subscribe({
        next: data => {
          if (data.code === 200) {
            this.projects = data.data;
          }
        }
      })
    } else {
      this.getProjects.GetProjectCategory(filterName).subscribe({
        next: data => {
          if (data.code === 200) {
            this.projects = data.data;
          }
        }
      })
    }
  }

  OnClickeGoProjectGithub(project: any): void {
    window.open(`${project.sourceCodeUrl}`, '_blank');
  }

  GoToProjects(): void {
    const element = document.getElementById('my-projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  GoToContact(): void {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
