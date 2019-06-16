import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';
import { SkillserviceService } from '../skillservice.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  skill: Skill;

  skills: Skill[];

  constructor(private service: SkillserviceService) { }

  getSkills(): void {
    this.service.getSkills().subscribe(s => this.skills = s);
  }

  onSelect(sk: Skill): void {
    this.skill = sk;
  }

  ngOnInit() {
    this.getSkills();
  }

}
