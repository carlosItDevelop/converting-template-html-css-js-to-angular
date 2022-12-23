import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LocalDataComponent } from './local-data/local-data.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { ScheduleAllModule } from '@syncfusion/ej2-angular-schedule';

export const routes: Routes = [
   { path: '', component: LocalDataComponent }
];


@NgModule({
  declarations: [
    LocalDataComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ScheduleAllModule,
    RouterModule.forChild(routes)
  ]
})
export class SchedulerModule { }
