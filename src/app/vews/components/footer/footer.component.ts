import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  dataCopyright: any;
  ngOnInit(): void {
  }

  constructor(){
    this.dataCopyright = new Date();
  }

}
