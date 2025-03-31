import { Component, EventEmitter, inject, Input, input, Output } from '@angular/core';
import { Turma } from '../../../models/turma';
import { RouterLink } from '@angular/router';
import { TurmaService } from '../../../services/turma.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-turma-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './turma-list.component.html',
  styleUrl: './turma-list.component.scss'
})
export class TurmaListComponent {
  lista: Turma[]= [];
  turmaService = inject(TurmaService);
  @Input("botoes") botoes : boolean = false;  
  @Output("retornoTurma") retornoTurma = new EventEmitter<any>();

  constructor(){
    this.findAll();
  }

  findAll(){
    
    this.turmaService.findAll().subscribe({
      next: (listaRetornada) => {
        this.lista = listaRetornada;
      },
      error: (erro) => {
        Swal.fire(erro.error, '', 'error');
      }
    });
  }

  delete(turma: Turma){
    let i = this.lista.findIndex(x => {return x.id == turma.id});
    this.lista.splice(i, 1);
  }

  select(turma:Turma){
    this.retornoTurma.emit(turma);
  }
}
