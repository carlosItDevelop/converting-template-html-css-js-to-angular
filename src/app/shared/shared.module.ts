import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderForTitleComponent } from './header-for-title/header-for-title.component';



@NgModule({
  declarations: [
    HeaderForTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderForTitleComponent]
})
export class SharedModule { }
