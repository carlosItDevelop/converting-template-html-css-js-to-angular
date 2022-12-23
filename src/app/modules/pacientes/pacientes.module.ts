import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { EstadoPacienteComponent } from './estado-paciente/estado-paciente.component';
import { Routes, RouterModule } from '@angular/router';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';


export const routes: Routes = [
  { path: '', component: ListaPacientesComponent }
];

@NgModule({
    declarations: [
        EstadoPacienteComponent,
        ListaPacientesComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class PacientesModule { }
