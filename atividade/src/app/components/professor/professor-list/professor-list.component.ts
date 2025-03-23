import { Component } from '@angular/core';
import { Professor } from '../../../models/professor';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-professor-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './professor-list.component.html',
  styleUrl: './professor-list.component.scss'
})
export class ProfessorListComponent {
  lista: Professor[]= [];

  constructor(){
    this.findAll();
  }

  findAll(){
    
    this.lista.push(new Professor(1,"abc","000.000.000-00","","", []));
    this.lista.push(new Professor(2,"abc","000.000.000-00","","", []));
    this.lista.push(new Professor(3,"abc","000.000.000-00","","", []));
  }

  delete(professor: Professor){
    let i = this.lista.findIndex(x => {return x.id == professor.id});
    this.lista.splice(i, 1);
  }
}
