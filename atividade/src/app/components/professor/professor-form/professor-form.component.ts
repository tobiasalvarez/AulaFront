import { Component, EventEmitter, inject, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Professor } from '../../../models/professor';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorService } from '../../../services/professor.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-professor-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './professor-form.component.html',
  styleUrl: './professor-form.component.scss'
})
export class ProfessorFormComponent {

  @Input("professor") professor: Professor = new Professor();
  @Output("meuEvento") meuEvento = new EventEmitter();

  private professorService = inject(ProfessorService);
  private roteador = inject(Router);
  private route = inject(ActivatedRoute);

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
            this.meuEvento.emit("OK");
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
            this.meuEvento.emit("OK");
          },
          error: (erro) => {
            Swal.fire(erro.error, '', 'error');
          }
        });
  
      }
    }

}

