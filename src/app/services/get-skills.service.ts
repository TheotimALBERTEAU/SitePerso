import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'any'
})
export class GetSkillsService {

  constructor(public http: HttpClient) {
  }

  public ApiUrl = 'http://141.145.204.147:3000/';

  GetSkills() {
    return this.http.get<any>(`${this.ApiUrl}skills`)
  }
}
