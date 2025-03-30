import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Turma } from '../models/turma';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  private API = "http://localhost:8080/api/turma";

  constructor(private http: HttpClient) { }

  findAll(): Observable<Turma[]> {
    return this.http.get<Turma[]>(`${this.API}/findAll`);
  }

  findById(id: number): Observable<Turma> {
    return this.http.get<Turma>(`${this.API}/findById/${id}`);
  }

  deleteById(id: number): Observable<string> {
    return this.http.delete<string>(`${this.API}/deleteById/${id}`, { responseType: 'text' as 'json' });
  }

  save(turma: Turma): Observable<string> {
    return this.http.post<string>(`${this.API}/save`, turma, { responseType: 'text' as 'json' });
  }

  update(turma: Turma, id: number): Observable<string> {
    return this.http.put<string>(`${this.API}/update/${id}`, turma, { responseType: 'text' as 'json' });
  }
}
