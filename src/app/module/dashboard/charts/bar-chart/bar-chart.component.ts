import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public chart: any;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){

    this.chart = new Chart("barChart", {
      type: 'bar',

      data: {// values on X-Axis
        labels: ['2022-11-03', '2022-11-04', '2022-11-05','2022-11-06',
								 '2022-11-07'],
	       datasets: [
          {
            label: "Vendas no Período",
            data: ['467','576', '572', '79', '92'],
            backgroundColor: 'pink'
          },
          {
            label: "Lucro",
            data: ['542', '542', '536', '327', '17'],
            backgroundColor: 'green'
          },
           {
             label: "Dispersão",
             data: ['142', '522', '353', '237', '111'],
             backgroundColor: 'blue'
           }
        ]
      },
      options: {
        aspectRatio:2.0
      }

    });
  }

}

