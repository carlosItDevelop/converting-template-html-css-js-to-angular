import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { TriagemComponent } from './triagem/triagem/triagem.component';
import { ChamadamedicaComponent } from './chamadamedica/chamadamedica.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    BarChartComponent,
    LineChartComponent,
    TriagemComponent,
    ChamadamedicaComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
