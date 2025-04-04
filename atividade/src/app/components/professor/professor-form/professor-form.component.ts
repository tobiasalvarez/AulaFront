import { Component, EventEmitter, inject, Input, Output, TemplateRef, viewChild, ViewChild } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Professor } from '../../../models/professor';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorService } from '../../../services/professor.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import Swal from 'sweetalert2';
import { Turma } from '../../../models/turma';
import { TurmaListComponent } from "../../turma/turma-list/turma-list.component";


@Component({
  selector: 'app-professor-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule, TurmaListComponent],
  templateUrl: './professor-form.component.html',
  styleUrl: './professor-form.component.scss'
})
export class ProfessorFormComponent {

    modalService = inject(MdbModalService);
    @ViewChild("modalTurmas") modalTurmas!: TemplateRef<any>;
    modalRef!: MdbModalRef<any>;

  @Input("professor") professor: Professor = new Professor();
  @Output("retorno") retorno = new EventEmitter();

  professorService = inject(ProfessorService);
  roteador = inject(Router);
  route = inject(ActivatedRoute);

  findById(id: number) {
    this.professorService.findById(id).subscribe({
      next: (professorRetornado) => {
        this.professor = professorRetornado;
      },
      error: (erro) => {
        Swal.fire(erro.error, '', 'error');
      }
    });
  }

    save(){
      if(this.professor.id > 0){
        // UPDATE
        this.professorService.update(this.professor, this.professor.id).subscribe({
          next: (mensagem) => {
            Swal.fire(mensagem, '', 'success');
            this.roteador.navigate(['admin/professor']);
            this.retorno.emit("OK");
          },
          error: (erro) => {
            Swal.fire(erro.error, '', 'error');
          }
        });
      }else{
        // SAVE
        this.professorService.save(this.professor).subscribe({
          next: (mensagem) => {
            Swal.fire(mensagem, '', 'success');
            this.roteador.navigate(['admin/professor']);
            this.retorno.emit("OK");
          },
          error: (erro) => {
            Swal.fire(erro.error, '', 'error');
          }
        });
  
      }
      
      this.retorno.emit(this.professor);
    }

    buscarTurma(){
      this.modalRef = this.modalService.open(this.modalTurmas, {modalClass:'modal-lg'});
    }

    retornoTurma(turma:Turma){
      this.professor.turmas.push(turma);
      this.modalRef.close();  
    }
}

