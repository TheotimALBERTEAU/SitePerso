import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'any'
})
export class GetProjectService {

  constructor(public http: HttpClient) {
  }

  private readonly ApiUrl= environment.apiUrl;

  GetProjects() {
    return this.http.get<any>(`${this.ApiUrl}/projects`);
  }

  GetProjectCategory(category: string) {
    return this.http.get<any>(`${this.ApiUrl}/projects/${category}`)
  }

  GetCategories() {
    return this.http.get<any>(`${this.ApiUrl}/projects/categories`)
  }
}
