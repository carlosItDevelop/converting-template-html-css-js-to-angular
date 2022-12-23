import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./modules/dasboard/dasboard.module').then(m=>m.DasboardModule) },
    { path: 'listapacientes', loadChildren: () => import('./modules/pacientes/pacientes.module').then(m=>m.PacientesModule)},
    { path: 'scheduler', loadChildren: () => import('./modules/syncfusion/scheduler/scheduler.module').then(m=>m.SchedulerModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
