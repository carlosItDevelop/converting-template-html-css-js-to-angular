import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {

  titulo: string;
  subtitulo: string;


  constructor(){
    this.titulo = "Pacientes";
    this.subtitulo = "Lista de Pacientes";
  }
  ngOnInit(): void {

  }
}

