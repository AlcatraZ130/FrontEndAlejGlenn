import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  correo: string = '';  // Cambiado a 'nombre'
  contrasena: string = '';  // Cambiado a 'contrasena'
  errorMessage: string = '';
  private authService = inject(AuthService);
  private router = inject(Router);
  
  login(): void {
    if (this.correo !== '' && this.contrasena !== '') {
      this.authService.login(this.correo, this.contrasena).subscribe({
        next: (response) => {
          if (response && response.token) { 
            this.authService.saveUserData(response.token, response.user);
            this.router.navigate(['/home']);
          } else {
            this.errorMessage = 'No se recibió token del servidor';
          }
        },
        error: (error) => {
          this.errorMessage = error.message || 'Error de autenticación';
        }
      });
    } else {
      this.errorMessage = 'Ingrese Usuario y Contraseña';
    }
  }
  
}
