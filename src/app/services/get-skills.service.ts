import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'any'
})
export class GetSkillsService {

  constructor(public http: HttpClient) {
  }

  GetSkills() {
    return this.http.get<any>('http://localhost:3000/skills')
  }
}
