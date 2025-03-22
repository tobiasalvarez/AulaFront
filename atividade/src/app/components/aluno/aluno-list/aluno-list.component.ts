import { Component } from '@angular/core';
import { Aluno } from '../../../models/aluno';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aluno-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './aluno-list.component.html',
  styleUrl: './aluno-list.component.scss'
})
export class AlunoListComponent {
  lista: Aluno[]= [];

  constructor(){
    this.findAll();
  }

  findAll(){
    
    this.lista.push(new Aluno(1,"abc","000.000.000-00","45999999",1));
    this.lista.push(new Aluno(2,"abcd","222.000.000-00","45999999",2));
    this.lista.push(new Aluno(3,"abcde","111.000.000-00","45999999",3));
  }

  delete(aluno: Aluno){
    let i = this.lista.findIndex(x => {return x.id == aluno.id});
    this.lista.splice(i, 1);
  }
}
