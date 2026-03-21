import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'any'
})
export class GetSkillsService {

  constructor(public http: HttpClient) {
  }

  private readonly ApiUrl= environment.apiUrl;

  GetSkills() {
    return this.http.get<any>(`${this.ApiUrl}/skills`)
  }
}
