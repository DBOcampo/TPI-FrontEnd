import { Component, OnInit } from '@angular/core';
import { skillidi } from 'src/app/mocks/skill-idi';
import { SkillIdiService } from 'src/app/services/skill-idi.service';
import { SkillsDataService } from 'src/app/services/skills-data.service';

@Component({
  selector: 'skill-idi',
  templateUrl: './skill-idi.component.html',
  styleUrls: ['./skill-idi.component.css']
})
export class SkillIdiComponent implements OnInit {

  skills!: skillidi[]
  enabled: boolean = false

  constructor(private skillData: SkillIdiService, private newData: SkillsDataService) { }

  ngOnInit(): void {
    this.skillData.getSkills().subscribe((skill) => {
      this.skills = skill
      console.log(this.skills)
    })

    this.newData.currentBtnData.subscribe(d => this.enabled = d)
  }

  deleteSkill(skill: skillidi) {
    this.skillData.delSkill(skill).subscribe(() => {
      this.skills = this.skills.filter(t => t.id !== skill.id)
    })
  }

  addSkill(skill: skillidi) {
    this.skillData.addSkill(skill).subscribe((skill) =>
      this.skills.push(skill))
  }

  editSkill(skill: skillidi) {
    this.skillData.editSkill(skill).subscribe()
  }
}
