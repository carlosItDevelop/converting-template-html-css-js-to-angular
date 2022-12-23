import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-for-title',
  templateUrl: './header-for-title.component.html',
  styleUrls: ['./header-for-title.component.css']
})
export class HeaderForTitleComponent implements OnInit {
  @Input() titulo!: string;
  @Input() subtitulo!: string;

  ngOnInit(): void {
  }


}
