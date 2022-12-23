import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  titulo: string;
  subtitulo: string;

  ngOnInit(): void {
  }

  constructor(){
    this.titulo = "Dashboard";
    this.subtitulo = "Controle Analítico do Sistema";
  }

}
