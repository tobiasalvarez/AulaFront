import { Component } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Professor } from '../../../models/professor';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-professor-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './professor-form.component.html',
  styleUrl: './professor-form.component.scss'
})
export class ProfessorFormComponent {
  professor: Professor = new Professor(1,"","","","", []);
  professor1: Professor = new Professor(2,"","","","",[]);

  

  save(){
    alert('cadastrado com succeso')
  }
}
