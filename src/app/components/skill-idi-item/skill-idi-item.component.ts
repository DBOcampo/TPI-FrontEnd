import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { skillidi } from 'src/app/mocks/skill-idi';
import { SkillsDataService } from 'src/app/services/skills-data.service';

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

  constructor(private skillData: SkillsDataService) { }

  ngOnInit(): void {
    this.skillData.currentBtnData.subscribe((d) => {
      this.enabled = d
      if (this.enabled === false) {
        this.edtEnabled = false
      }
    })
  }

  editEnable(skill: skillidi, newText: string) {
    this.edtEnabled = !this.edtEnabled
    if (this.edtEnabled == false) {
      const newValue: skillidi = { idioma: newText, porcentaje: this.skills.porcentaje, color: this.skills.color }
      skill.idioma = newValue.idioma, skill.porcentaje = newValue.porcentaje, skill.color = newValue.color
      this.onEditSkill.emit(skill)
    }
  }

  delSkill(skill: skillidi) {
    this.onDeleteSkill.emit(skill)
  }
}
