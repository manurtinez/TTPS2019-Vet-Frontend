import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EditarDuenoComponent } from './editar-dueno/editar-dueno.component';
import { HabilitarVeterinariosComponent } from './habilitar-veterinarios/habilitar-veterinarios.component';
import { HistorialEventosComponent } from './historial-eventos/historial-eventos.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'editar-dueno', component: EditarDuenoComponent},
  {path: 'habilitar-veterinarios', component: HabilitarVeterinariosComponent},
  {path: 'historial-eventos', component: HistorialEventosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
