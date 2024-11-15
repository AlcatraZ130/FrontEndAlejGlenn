import { Component, OnInit } from '@angular/core';
import { UsuarioService, Usuario } from '../../services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  usuario: Usuario | null = null;
  error: string = '';
  loading: boolean = true;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.cargarPerfil();
  }

  cargarPerfil(): void {
    this.loading = true;
    this.usuarioService.getProfile().subscribe({
      next: (data) => {
        this.usuario = data;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'No se pudo cargar la información del perfil';
        this.loading = false;
        console.error('Error:', error);
      }
    });
  }
}