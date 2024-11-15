import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  rol: 'administrador' | 'conductor' | 'estudiante';
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) { }

  getProfile(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/profile`);
  }
}