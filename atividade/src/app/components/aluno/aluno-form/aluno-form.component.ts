import { Component, EventEmitter, inject, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Aluno } from '../../../models/aluno';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../../../services/aluno.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-aluno-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.scss'
})
export class AlunoFormComponent {


  @Input("aluno") aluno: Aluno = new Aluno();
  @Output("meuEvento") meuEvento = new EventEmitter();

  private alunoService = inject(AlunoService);
  private roteador = inject(Router);
  private route = inject(ActivatedRoute);

  findById(id: number) {
    this.alunoService.findById(id).subscribe({
      next: (alunoRetornado) => {
        this.aluno = alunoRetornado;
      },
      error: (erro) => {
        Swal.fire(erro.error, '', 'error');
      }
    });
  }

    save(){
      if(this.aluno.id > 0){
        // UPDATE
        this.alunoService.update(this.aluno, this.aluno.id).subscribe({
          next: (mensagem) => {
            Swal.fire(mensagem, '', 'success');
            this.roteador.navigate(['admin/aluno']);
            this.meuEvento.emit("OK");
          },
          error: (erro) => {
            Swal.fire(erro.error, '', 'error');
          }
        });
      }else{
        // SAVE
        this.alunoService.save(this.aluno).subscribe({
          next: (mensagem) => {
            Swal.fire(mensagem, '', 'success');
            this.roteador.navigate(['admin/aluno']);
            this.meuEvento.emit("OK");
          },
          error: (erro) => {
            Swal.fire(erro.error, '', 'error');
          }
        });
  
      }
    }

}

