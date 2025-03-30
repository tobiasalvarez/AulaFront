import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { Professor } from '../../../models/professor';
import { RouterLink } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ProfessorFormComponent } from '../professor-form/professor-form.component';

@Component({
  selector: 'app-professor-list',
  standalone: true,
  imports: [RouterLink, ProfessorFormComponent],
  templateUrl: './professor-list.component.html',
  styleUrl: './professor-list.component.scss'
})
export class ProfessorListComponent {
  lista: Professor[]= [];

  modalService = inject(MdbModalService);
  @ViewChild('modalProfessorNew') modalProfessorNew! : TemplateRef<any>;
  modalRef = MdbModalRef<any>;

  constructor(){
    this.findAll();
  }

  findAll(){
    
    this.lista.push(new Professor(1,"abc","000.000.000-00","","", []));
    this.lista.push(new Professor(2,"abc","000.000.000-00","","", []));
    this.lista.push(new Professor(3,"abc","000.000.000-00","","", []));
  }

  delete(professor: Professor){
    let i = this.lista.findIndex(x => {return x.id == professor.id});
    this.lista.splice(i, 1);
  }

  new(){
    this.modalService.open(this.modalProfessorNew)
  }

  
}
