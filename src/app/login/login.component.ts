import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string ="";
  password: string="";
  constructor(private router: Router) { }

  login() {
    // Aquí puedes agregar la lógica de autenticación
    if (this.username === 'admin' && this.password === 'admin123') {
      this.router.navigate(['/admin']);
    } else if (this.username === 'lector' && this.password === 'lector123') {
      this.router.navigate(['/lector']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
