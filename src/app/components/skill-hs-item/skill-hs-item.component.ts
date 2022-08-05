import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { skillhs } from 'src/app/mocks/skill-hs';
import { SkillsDataService } from 'src/app/services/skills-data.service';

@Component({
  selector: 'skill-hs-item',
  templateUrl: './skill-hs-item.component.html',
  styleUrls: ['./skill-hs-item.component.css']
})
export class SkillHSItemComponent implements OnInit {
  newText: string = ''
  @Output() onEditSkill: EventEmitter<skillhs> = new EventEmitter
  @Output() onDeleteSkill: EventEmitter<skillhs> = new EventEmitter
  @Input() enabled: boolean = false
  @Input() skill!: skillhs
  edtEnabled: boolean = false
  editable: object = { 'border': '1px solid', 'borderRadius': '6px', 'display': 'inline-block' };

  constructor(private newData: SkillsDataService) { }

  ngOnInit(): void {
    this.newData.currentEdtBtnData.subscribe(d => this.edtEnabled = d)
  }

  enableEdit(skill: skillhs, newText: string) {
    this.edtEnabled = !this.edtEnabled
    if (this.edtEnabled == false) {
      const newValue: skillhs = { skill: newText, porcentaje: this.skill.porcentaje, color: this.skill.color }
      skill.skill = newValue.skill, skill.porcentaje = newValue.porcentaje, skill.color = newValue.color
      this.onEditSkill.emit(skill)
    }
  }

  deleteSkill(skill: skillhs) {
    this.onDeleteSkill.emit(skill)
  }
}
