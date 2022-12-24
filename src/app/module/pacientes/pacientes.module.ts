import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { ListPacienteComponent } from './list-paciente/list-paciente.component';
import { StatusPacienteComponent } from './status-paciente/status-paciente.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListPacienteComponent,
    StatusPacienteComponent
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    SharedModule
  ]
})
export class PacientesModule { }
