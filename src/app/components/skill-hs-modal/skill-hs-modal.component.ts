import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { skillhs } from 'src/app/mocks/skill-hs';

@Component({
  selector: 'skill-hs-modal',
  templateUrl: './skill-hs-modal.component.html',
  styleUrls: ['./skill-hs-modal.component.css']
})
export class SkillHsModalComponent implements OnInit {

  @Output() onAddSkill: EventEmitter<skillhs> = new EventEmitter
  skill: string = ''
  porcentaje: number = 0
  color: string = '#000000'

  constructor() { }

  ngOnInit(): void {
  }

  test() {
    console.log(this.porcentaje)
  }

  onSubmit() {
    if (this.skill.length === 0) {
      alert('Anada una skill')
      return
    }
    const { skill, porcentaje, color } = this
    const newSkills = { skill, porcentaje, color }
    this.onAddSkill.emit(newSkills)
    setTimeout(() => { this.skill = '', this.porcentaje = 0, this.color = '#000000' }, 1)
    console.log(newSkills)
  }
}
