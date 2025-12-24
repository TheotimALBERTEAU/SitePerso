import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'any'
})
export class GetSkillsService {

  constructor(public http: HttpClient) {
  }

  public ApiUrl = 'https://hessflix.ddns.net:8443/api/';

  GetSkills() {
    return this.http.get<any>(`${this.ApiUrl}skills`)
  }
}
