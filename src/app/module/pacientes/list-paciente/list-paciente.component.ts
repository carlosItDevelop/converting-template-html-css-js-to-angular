import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-list-paciente',
  templateUrl: './list-paciente.component.html',
  styleUrls: ['./list-paciente.component.css']
})
export class ListPacienteComponent implements OnInit {

  titulo: string;
  subtitulo: string;

  listPaciente: Paciente[] = [];

  constructor(){
    this.titulo = "Pacientes";
    this.subtitulo = "Lista de Pacientes";
  }

  ngOnInit(): void {
    this.listPaciente = [
      {
        id: 1,
        nome: 'Carlos Alberto',
        endereco: 'Rua dois e Um, Rio Preto',
        idade: 46
      },
      {
        id: 2,
        nome: 'Cesar Nascimento',
        endereco: 'Rua 25 de Março, 75 - Beirão das Ocas',
        idade: 34
      },
      {
        id: 3,
        nome: 'Marina Silva',
        endereco: 'Av Rui Barbosa, 76',
        idade: 25
      },
      {
        id: 4,
        nome: 'Humberto de Barros Medeiros',
        endereco: 'Travessa 13 de Maio, 1276 - Rio das Ostras',
        idade: 40
      },
      {
        id: 5,
        nome: 'Glaucia Lemos',
        endereco: 'Rua das Andradas, 251 - Marambaia',
        idade: 39
      },
      {
        id: 6,
        nome: 'Leonor Rodrigues',
        endereco: 'Deodoro da Fonseca, 13.502 - Lagoa Alta',
        idade: 72
      },
      {
        id: 7,
        nome: 'Beatriz Segal',
        endereco: 'Av Vieira Souto, 512 - Boa Vista de Baixo',
        idade: 54
      },
      {
        id: 8,
        nome: 'Armando Sempre',
        endereco: 'Rua Visconde de Niteroi, 135 - Portal do Lago',
        idade: 38
      },
      {
        id: 9,
        nome: 'Silvia de Andrade',
        endereco: 'Av. Saiu de Baixo, 350 - Boa Viagem',
        idade: 17
      }
    ];
  }

}
