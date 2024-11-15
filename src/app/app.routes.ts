//app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { RutasComponent } from './pages/rutas/rutas.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

export const routes: Routes = [
    // Ruta por defecto
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    
    // Ruta pública
    { 
      path: 'login', 
      component: LoginComponent,
      title: 'Login'
    },
    
    // Rutas protegidas
    {
      path: '',
      children: [
        {
          path: 'home',
          component: HomeComponent,
          title: 'Inicio'
        },
        {
          path: 'rutas',
          component: RutasComponent,
          title: 'Rutas'
        },
        {
          path: 'reservas',
          component: ReservasComponent,
          title: 'Reservas'
        },
        {
          path: 'perfil',
          component: PerfilComponent,
          title: 'Perfil'
        }
      ]
    },
  
    // Ruta para manejar rutas no existentes
    { path: '**', redirectTo: '/login' }
  ];