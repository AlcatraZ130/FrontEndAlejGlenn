import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RutaService {

  private apiUrl = 'http://localhost:5000/rutas';

  constructor(private http: HttpClient) {}

  getRutas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/rutas`);
  }

}
