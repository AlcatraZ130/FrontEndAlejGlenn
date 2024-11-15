// services/reservas.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Reserva {
  id: number;
  id_estudiante: number;
  id_ruta: number;
  fecha: Date;
  estado: string;
  ruta?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  private apiUrl = 'http://localhost:8000/reservas';

  constructor(private http: HttpClient) { }

  obtenerReservas(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(`${this.apiUrl}/listar`);
  }

  crearReserva(reserva: Partial<Reserva>): Observable<Reserva> {
    return this.http.post<Reserva>(`${this.apiUrl}/crear`, reserva);
  }

  cancelarReserva(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/cancelar`, {});
  }
}