import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EditarDuenoComponent } from './editar-dueno/editar-dueno.component';
import { HabilitarVeterinariosComponent } from './habilitar-veterinarios/habilitar-veterinarios.component';
import { HistorialEventosComponent } from './historial-eventos/historial-eventos.component';
import { ModificarMascotaComponent } from './modificar-mascota/modificar-mascota.component';
import { HistorialUnaMascotaComponent } from './historial-una-mascota/historial-una-mascota.component';
import { MascotasVetPendientesComponent } from './mascotas-vet-pendientes/mascotas-vet-pendientes.component';
import {AuthGuard} from './auth.guard'
import { RoleGuard } from './role-guard.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard]},
  {path: 'editar-dueno', component: EditarDuenoComponent},
  {path: 'habilitar-veterinarios', component: HabilitarVeterinariosComponent, canActivate: [RoleGuard], data: { expectedRole: 'admin' }},
  {path: 'historial-eventos', component: HistorialEventosComponent},
  {path: 'editar-mascota/:id', component: ModificarMascotaComponent},
  {path: 'historial-una-mascota/:id', component: HistorialUnaMascotaComponent},
  {path: 'mascotasVet-pendientes', component: MascotasVetPendientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
