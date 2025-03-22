import { Component } from '@angular/core';
import { Curso } from '../../../models/curso';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-curso-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './curso-list.component.html',
  styleUrl: './curso-list.component.scss'
})
export class CursoListComponent {
lista: Curso[]= [];

  constructor(){
    this.findAll();
  }

  findAll(){
    
    this.lista.push(new Curso(1,"abc"));
    this.lista.push(new Curso(2,"abcd"));
    this.lista.push(new Curso(3,"abcde"));
  }

  delete(curso: Curso){
    let i = this.lista.findIndex(x => {return x.id == curso.id});
    this.lista.splice(i, 1);
  }
}
