import { Injectable } from '@angular/core';
import { Skill } from './skill';
import { SkillList } from './data-skills';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillserviceService {

  constructor() { }

  getSkills(): Observable<Skill[]> {
    return of(SkillList);
  }
}
