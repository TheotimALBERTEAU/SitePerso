import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'any'
})
export class GetProjectService {

  constructor(public http: HttpClient) {
  }

  public ApiUrlProjects = 'http://localhost:3000/projects';

  GetProjects() {
    return this.http.get<any>(`${this.ApiUrlProjects}`)
  }

  GetProjectCategory(category: string) {
    return this.http.get<any>(`${this.ApiUrlProjects}/${category}`)
  }

  GetCategories() {
    return this.http.get<any>(`${this.ApiUrlProjects}/categories`)
  }
}
