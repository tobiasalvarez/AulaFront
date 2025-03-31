import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { Professor } from '../../../models/professor';
import { RouterLink } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ProfessorFormComponent } from '../professor-form/professor-form.component';
import { ProfessorService } from '../../../services/professor.service';
import Swal from 'sweetalert2';
import { TurmaListComponent } from "../../turma/turma-list/turma-list.component";

@Component({
  selector: 'app-professor-list',
  standalone: true,
  imports: [RouterLink, ProfessorFormComponent, TurmaListComponent],
  templateUrl: './professor-list.component.html',
  styleUrl: './professor-list.component.scss',
  providers: [MdbModalService]
})
export class ProfessorListComponent {
  lista: Professor[]= [];
  professorEdit:Professor = new Professor();

  professorService = inject(ProfessorService);

  modalService = inject(MdbModalService);
  @ViewChild('modalProfessorNew') modalProfessorNew! : TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  constructor(){
    this.findAll();
  }

  findAll(){
   
    this.professorService.findAll().subscribe({
      next: (listaRetornada) => {
        this.lista = listaRetornada;
      },
      error: (erro) => {
        Swal.fire(erro.error, '', 'error');
      }
    });
  }

  delete(professor: Professor){

    Swal.fire({
      title: 'Deseja mesmo deleatr?',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {

        this.professorService.deleteById(professor.id).subscribe({
          next: (mensagem) => {
            Swal.fire(mensagem, '', 'success');
            this.findAll();
          },
          error: (erro) => {
            Swal.fire(erro.error, '', 'error');
          }
        });
        
      }
    });
  }

  new(){
    this.professorEdit = new Professor();
    this.modalRef = this.modalService.open(this.modalProfessorNew)
  }

  update(professor:Professor){
    this.professorEdit = Object.assign({}, professor);
    this.modalRef = this.modalService.open(this.modalProfessorNew);
  }

  retorno(professor:Professor){
    if(professor.id > 0){
      let indice = this.lista.findIndex(x => {return x.id == professor.id});
      this.lista[indice] = professor;
    }else{
      this.lista.push(professor);
    }
    this.modalRef.close();
  }

  
}
