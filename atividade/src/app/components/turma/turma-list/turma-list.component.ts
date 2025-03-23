import { Component } from '@angular/core';
import { Turma } from '../../../models/turma';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-turma-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './turma-list.component.html',
  styleUrl: './turma-list.component.scss'
})
export class TurmaListComponent {
  lista: Turma[]= [];

  constructor(){
    this.findAll();
  }

  findAll(){
    
    this.lista.push(new Turma());
    this.lista.push(new Turma());
    this.lista.push(new Turma());
  }

  delete(turma: Turma){
    let i = this.lista.findIndex(x => {return x.id == turma.id});
    this.lista.splice(i, 1);
  }
}
