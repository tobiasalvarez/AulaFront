import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  http = inject(HttpClient);

  API = "http://localhost:8080/api/aluno";
  constructor() { }

  findAll(): Observable<Aluno[]>{
    return this.http.get<Aluno[]>(this.API+"/findAll");
  }

  deleteById(): Observable<Aluno[]>{
    return this.
  }
}
