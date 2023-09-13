import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { skillidi } from 'src/app/mocks/skill-idi';
import { CancelEventService } from 'src/app/services/cancel-event.service';
import { SkillsDataService } from 'src/app/services/skills-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'skill-idi-item',
  templateUrl: './skill-idi-item.component.html',
  styleUrls: ['./skill-idi-item.component.css']
})
export class SkillIdiItemComponent implements OnInit {
  @Output() onEditSkill: EventEmitter<skillidi> = new EventEmitter
  @Output() onDeleteSkill: EventEmitter<skillidi> = new EventEmitter
  enabled: boolean = false
  edtEnabled: boolean = false
  editable: object = { 'border': '1px solid', 'borderRadius': '6px', 'display': 'inline-block' };
  @Input() skills!: skillidi
  oldSkills!: skillidi
  oldPorcentaje!: number
  oldColor!: string
  clickEventsubscription: Subscription;

  constructor(private skillData: SkillsDataService, private cancelEvent: CancelEventService) {

    this.clickEventsubscription = this.cancelEvent.getClickEvent().subscribe(() => {
      this.cancelEdit();
    })

  }

  ngOnInit(): void {
    this.oldSkills = this.skills
    this.oldPorcentaje = this.skills.porcentaje
    this.oldColor = this.skills.color
    this.skillData.currentBtnData.subscribe((d) => {
      this.enabled = d
      if (this.enabled === false) {
        this.edtEnabled = false
      }
    })
  }

  editEnable() {
    this.edtEnabled = !this.edtEnabled
  }

  delSkill(skill: skillidi) {
    this.onDeleteSkill.emit(skill)
  }

  sendEdit(skill: skillidi, newText: string) {
    const newValue: skillidi = { idioma: newText, porcentaje: this.skills.porcentaje, color: this.skills.color }
    skill.idioma = newValue.idioma, skill.porcentaje = newValue.porcentaje, skill.color = newValue.color
    this.onEditSkill.emit(skill)
    this.oldSkills.idioma = newText
    this.oldPorcentaje = newValue.porcentaje
    this.oldColor = newValue.color
  }

  cancelEdit() {
    this.oldSkills.idioma = this.oldSkills.idioma + ' '
    this.skills.idioma = this.oldSkills.idioma
    this.skills.porcentaje = this.oldPorcentaje
    this.skills.color = this.oldColor
    setTimeout(() => {
      this.skills.idioma = this.oldSkills.idioma.slice(0, -1)
      this.oldSkills.idioma = this.skills.idioma
    }, 0)
  }
}
