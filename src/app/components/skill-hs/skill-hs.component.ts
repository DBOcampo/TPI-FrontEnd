import { Component, OnInit } from '@angular/core';
import { skillhs } from 'src/app/mocks/skill-hs';
import { SkillHsService } from 'src/app/services/skill-hs.service';
import { SkillsDataService } from 'src/app/services/skills-data.service';

@Component({
  selector: 'skill-hs',
  templateUrl: './skill-hs.component.html',
  styleUrls: ['./skill-hs.component.css']
})
export class SkillHSComponent implements OnInit {

  skills!: skillhs[]
  enabled!: boolean

  constructor(private skillData: SkillHsService, private newData: SkillsDataService) { }

  ngOnInit(): void {
    this.skillData.getSkill().subscribe((skills) => {
      this.skills = skills
      console.log(this.skills)
    })
    this.newData.currentData.subscribe(d => this.enabled = d)
  }

  recieveEnable(data: boolean) {
    this.enabled = data
    if (this.enabled === false) {
      this.newData.changeData(false)
    }
    console.log(this.enabled)
  }

  deleteSkill(skill: skillhs) {
    this.skillData.deleteSkill(skill).subscribe(() => {
      this.skills = this.skills.filter(t => t.id !== skill.id)
    })
  }

  addSkill(skill: skillhs) {
    this.skillData.addSkill(skill).subscribe((skill) => {
      this.skills.push(skill)
    })
  }

  editSkill(skill: skillhs) {
    this.skillData.editSkill(skill).subscribe()
  }
}
