import { Component, OnInit } from '@angular/core';
import { skillidi } from 'src/app/mocks/skill-idi';
import { SkillIdiService } from 'src/app/services/skill-idi.service';

@Component({
  selector: 'skill-idi',
  templateUrl: './skill-idi.component.html',
  styleUrls: ['./skill-idi.component.css']
})
export class SkillIdiComponent implements OnInit {

  skills!: skillidi[]

  constructor(private skillData: SkillIdiService) { }

  ngOnInit(): void {
    this.skillData.getSkills().subscribe((skill) => {
      this.skills = skill
      console.log(this.skills)
    })
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
