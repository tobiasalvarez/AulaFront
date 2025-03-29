import { Component, EventEmitter, inject, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Curso } from '../../../models/curso';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../../../services/curso.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-curso-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './curso-form.component.html',
  styleUrl: './curso-form.component.scss'
})
export class CursoFormComponent {

  @Input("curso") curso: Curso = new Curso();
  @Output("meuEvento") meuEvento = new EventEmitter();

  private cursoService = inject(CursoService);
  private roteador = inject(Router);
  private route = inject(ActivatedRoute);

  findById(id: number) {
    this.cursoService.findById(id).subscribe({
      next: (cursoRetornado) => {
        this.curso = cursoRetornado;
      },
      error: (erro) => {
        Swal.fire(erro.error, '', 'error');
      }
    });
  }

    save(){
      if(this.curso.id > 0){
        // UPDATE
        this.cursoService.update(this.curso, this.curso.id).subscribe({
          next: (mensagem) => {
            Swal.fire(mensagem, '', 'success');
            this.roteador.navigate(['admin/curso']);
            this.meuEvento.emit("OK");
          },
          error: (erro) => {
            Swal.fire(erro.error, '', 'error');
          }
        });
      }else{
        // SAVE
        this.cursoService.save(this.curso).subscribe({
          next: (mensagem) => {
            Swal.fire(mensagem, '', 'success');
            this.roteador.navigate(['admin/curso']);
            this.meuEvento.emit("OK");
          },
          error: (erro) => {
            Swal.fire(erro.error, '', 'error');
          }
        });
  
      }
    }

}

