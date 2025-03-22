import { Component, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Usuario } from '../../../models/usuario';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  usuario: Usuario = new Usuario();

  router = inject(Router);

  logar(){
    if (this.usuario.nomeUsuario == "admin" && this.usuario.senha == "admin") {
      this.router.navigate(['admin/aluno'])
    } else {
      alert('Tente novamente!');
    }
  }
}
