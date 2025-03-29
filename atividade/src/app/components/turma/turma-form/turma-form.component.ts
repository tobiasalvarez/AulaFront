import { Component, EventEmitter, inject, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Turma } from '../../../models/turma';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TurmaService } from '../../../services/turma.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-turma-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './turma-form.component.html',
  styleUrl: './turma-form.component.scss'
})
export class TurmaFormComponent {

  @Input("turma") turma: Turma = new Turma();
  @Output("meuEvento") meuEvento = new EventEmitter();

  private turmaService = inject(TurmaService);
  private roteador = inject(Router);
  private route = inject(ActivatedRoute);

  findById(id: number) {
    this.turmaService.findById(id).subscribe({
      next: (turmaRetornado) => {
        this.turma = turmaRetornado;
      },
      error: (erro) => {
        Swal.fire(erro.error, '', 'error');
      }
    });
  }

    save(){
      if(this.turma.id > 0){
        // UPDATE
        this.turmaService.update(this.turma, this.turma.id).subscribe({
          next: (mensagem) => {
            Swal.fire(mensagem, '', 'success');
            this.roteador.navigate(['admin/turma']);
            this.meuEvento.emit("OK");
          },
          error: (erro) => {
            Swal.fire(erro.error, '', 'error');
          }
        });
      }else{
        // SAVE
        this.turmaService.save(this.turma).subscribe({
          next: (mensagem) => {
            Swal.fire(mensagem, '', 'success');
            this.roteador.navigate(['admin/turma']);
            this.meuEvento.emit("OK");
          },
          error: (erro) => {
            Swal.fire(erro.error, '', 'error');
          }
        });
  
      }
    }

}

