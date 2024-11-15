import { Component, OnInit } from '@angular/core';
import { RutaService } from '../../services/rutas.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-rutas',
  standalone: true,
  imports: [],
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.scss']

})
export class RutasComponent implements OnInit {
  rutas: any[] = [];

  constructor(private rutasService: RutaService) {}

  ngOnInit(): void {
    this.rutasService.getRutas().subscribe((data) => {
      this.rutas = data;
    });
  }

}
