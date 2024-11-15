// pages/reservas/reservas.component.ts
import { Component, OnInit } from '@angular/core';
import { ReservasService, Reserva } from '../../services/reservas.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {
  reservas: Reserva[] = [];
  rutaSeleccionadaId: number | null = null;
  cargando = true;
  error = '';

  constructor(
    private reservasService: ReservasService,
  ) { }

  ngOnInit() {
    this.cargarReservas();
  }

  cargarReservas() {
    this.cargando = true;
    this.reservasService.obtenerReservas().subscribe({
      next: (reservas) => {
        this.reservas = reservas;
        this.cargando = false;
      },
      error: (error) => {
        this.error = 'Error al cargar las reservas';
        this.cargando = false;
        console.error('Error:', error);
      }
    });
  }



  crearReserva() {
    if (!this.rutaSeleccionadaId) {
      this.error = 'Por favor seleccione una ruta';
      return;
    }

    const reserva = {
      id_ruta: this.rutaSeleccionadaId,
      fecha: new Date(),
      estado: 'Pendiente'
    };

    this.reservasService.crearReserva(reserva).subscribe({
      next: () => {
        this.cargarReservas();
        this.rutaSeleccionadaId = null;
      },
      error: (error) => {
        this.error = 'Error al crear la reserva';
        console.error('Error:', error);
      }
    });
  }

  cancelarReserva(id: number) {
    this.reservasService.cancelarReserva(id).subscribe({
      next: () => {
        this.cargarReservas();
      },
      error: (error) => {
        this.error = 'Error al cancelar la reserva';
        console.error('Error:', error);
      }
    });
  }
}