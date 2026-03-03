import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'any'
})
export class GetEducationService {
  constructor(public http: HttpClient) {
  }

  public ApiUrlProjects = 'http://localhost:3000/education';

  GetEducation() {
    return this.http.get<any>(`${this.ApiUrlProjects}`)
  }
}
