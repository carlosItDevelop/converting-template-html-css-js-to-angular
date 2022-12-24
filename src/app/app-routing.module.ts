import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesModule } from './module/pacientes/pacientes.module';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', loadChildren: ()=> import('./module/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path: 'listapacientes', loadChildren: ()=> import('./module/pacientes/pacientes.module').then(m=>m.PacientesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
