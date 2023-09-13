import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { skillhs } from 'src/app/mocks/skill-hs';
import { CancelEventService } from 'src/app/services/cancel-event.service';
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
  oldSkill!: skillhs
  oldPorcentaje!: number
  oldColor!: string
  edtEnabled: boolean = false
  editable: object = { 'border': '1px solid', 'borderRadius': '6px', 'display': 'inline-block' };
  clickEventsubscription: Subscription;

  constructor(private newData: SkillsDataService, private cancelEvent: CancelEventService) {

    this.clickEventsubscription = this.cancelEvent.getClickEvent().subscribe(() => {
      this.cancelEdit();
    })

  }

  ngOnInit(): void {
    this.oldSkill = this.skill
    this.oldPorcentaje = this.skill.porcentaje
    this.oldColor = this.skill.color
    this.newData.currentEdtBtnData.subscribe(d => this.edtEnabled = d)
  }

  enableEdit() {
    this.edtEnabled = !this.edtEnabled
  }

  deleteSkill(skill: skillhs) {
    this.onDeleteSkill.emit(skill)
  }

  sendEdit(skill: skillhs, newText: string) {
    const newValue: skillhs = { skill: newText, porcentaje: this.skill.porcentaje, color: this.skill.color }
    skill.skill = newValue.skill, skill.porcentaje = newValue.porcentaje, skill.color = newValue.color
    this.onEditSkill.emit(skill)
    this.oldSkill.skill = newText
    this.oldPorcentaje = newValue.porcentaje
    this.oldColor = newValue.color

  }

  cancelEdit() {
    this.oldSkill.skill = this.oldSkill.skill + ' '
    this.skill.skill = this.oldSkill.skill
    this.skill.porcentaje = this.oldPorcentaje
    this.skill.color = this.oldColor
    setTimeout(() => {
      this.skill.skill = this.oldSkill.skill.slice(0, -1)
      this.oldSkill.skill = this.skill.skill
    }, 0)
  }
}
