import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: JSON.parse(localStorage.getItem('currentUser'))},
  {path: 'perfil', component: PerfilComponent, data: JSON.parse(localStorage.getItem('currentUser'))}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
