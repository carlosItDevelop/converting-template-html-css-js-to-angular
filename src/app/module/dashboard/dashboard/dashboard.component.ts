import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  titulo: string;
  subtitulo: string;

  constructor(){
    this.titulo = "Dashboard";
    this.subtitulo = "Dashboard | Quadro Analítico Gerencial";
  }


}
