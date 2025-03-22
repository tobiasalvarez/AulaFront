import { Component } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Curso } from '../../../models/curso';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-curso-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './curso-form.component.html',
  styleUrl: './curso-form.component.scss'
})
export class CursoFormComponent {
curso: Curso = new Curso(0,"");

save(){
  alert('Salvo com succeso')
}
}
