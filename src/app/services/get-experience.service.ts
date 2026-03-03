import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'any'
})
export class GetExperienceService {
  constructor(public http: HttpClient) {
  }

  public ApiUrlProjects = 'http://localhost:3000/experiences';

  GetExperiences() {
    return this.http.get<any>(`${this.ApiUrlProjects}`)
  }
}
