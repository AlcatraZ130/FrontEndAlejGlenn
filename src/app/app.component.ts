import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopnavComponent } from './home/topnav/topnav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopnavComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public router: Router) {}

  isLoginPage(): boolean {
    return this.router.url === '/login'; // Esto es para que el TopNav no se muestre en la página de login
  }
}
