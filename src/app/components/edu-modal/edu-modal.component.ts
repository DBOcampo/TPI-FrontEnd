import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { EduDataServiceService } from 'src/app/services/edu-data-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'edu-modal',
  templateUrl: './edu-modal.component.html',
  styleUrls: ['./edu-modal.component.css']
})
export class EduModalComponent implements OnInit, OnDestroy {

  educacion = {
    institucion: '',
    titulo: '',
    periodo: ''
  }
  listUL: any
  subscription!: Subscription
  // content: string = 

  constructor(private list: EduDataServiceService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.subscription = this.list.currentData.subscribe(a => this.listUL = a)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  submit() {
    console.log(this.educacion.institucion)
    var li: ElementRef = this.renderer.createElement('li')
    this.renderer.setAttribute(li, 'class', 'media mb-2 mt-3')
    this.renderer.setProperty(li, 'innerHTML', `<img src="https://cdn-icons-png.flaticon.com/512/7170/7170501.png" class="mr-3 mt-2 main-icon" alt="...">
    <div class="media-body">
        <h5 class="mt-0 mb-0 noselect" maxlength="110">
            <span style="user-select: text;" maxlength="110" id="xd" [contentEditable]="edtEnabled"
                [ngStyle]="edtEnabled? editable : {}">${this.educacion.institucion}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray"
                class="bi bi-pencil-fill mb-2 ml-3 eduedtbtn" [style.display]="enabled ? 'initial' : 'none'"
                style="cursor: pointer;" viewBox="0 0 16 16" (click)="enableEdit()" id="edtbtn">
                <path
                    d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray"
                class="bi bi-trash-fill mb-2 ml-3 eduedtbtn" [style.display]="enabled ? 'initial' : 'none'"
                style="cursor: pointer;" viewBox="0 0 16 16" onclick="delEdu(this.id)" id="dltbtn">
                <path
                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
        </h5>
        <p class="text-muted mb-1"><span [contentEditable]="edtEnabled" maxlength="130"
                [ngStyle]="edtEnabled? editable : {}">${this.educacion.titulo}</span>
        </p>
        <p class="text-muted mb-1"><span [contentEditable]="edtEnabled" maxlength="130"
                [ngStyle]="edtEnabled? editable : {}">${this.educacion.periodo}</span></p>
    </div>`)
    const lastChild = this.listUL.nativeElement.lastChild
    lastChild.after(li)
  }

}
