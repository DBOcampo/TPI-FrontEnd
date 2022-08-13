import { Component, OnInit } from '@angular/core';
import { skillhs } from 'src/app/mocks/skill-hs';
import { LoginDataService } from 'src/app/services/login-data.service';
import { SkillHsService } from 'src/app/services/skill-hs.service';
import { SkillsDataService } from 'src/app/services/skills-data.service';

@Component({
  selector: 'skill-hs',
  templateUrl: './skill-hs.component.html',
  styleUrls: ['./skill-hs.component.css']
})
export class SkillHSComponent implements OnInit {
  edit: boolean = false
  skills!: skillhs[]
  enabled!: boolean

  constructor(private skillData: SkillHsService, private newData: SkillsDataService, private editData: LoginDataService) { }

  ngOnInit(): void {
    this.skillData.getSkill().subscribe((skills) => {
      this.skills = skills
      console.log(this.skills)
    })
    this.newData.currentEdtBtnData.subscribe(d => this.enabled = d)
    this.editData.currentData.subscribe(data => this.edit = data)
  }

  recieveEnable(data: boolean) {
    this.enabled = data
    this.newData.changeBtnData(data)
    if (this.enabled === false) {
      this.newData.changeEdtBtnData(false)
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
