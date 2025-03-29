import { Component, inject } from '@angular/core';
import { Aluno } from '../../../models/aluno';
import { RouterLink } from '@angular/router';
import { AlunoService } from '../../../services/aluno.service';

@Component({
  selector: 'app-aluno-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './aluno-list.component.html',
  styleUrl: './aluno-list.component.scss'
})
export class AlunoListComponent {
  lista: Aluno[]= [];
  alunoService = inject(AlunoService);

  constructor(){
    this.findAll();
  }

  findAll(){
    
  }

  delete(aluno: Aluno){
    let i = this.lista.findIndex(x => {return x.id == aluno.id});
    this.lista.splice(i, 1);
  }
}
