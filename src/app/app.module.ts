import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSidebarComponent } from './vews/components/menu/left-sidebar/left-sidebar.component';

import { FooterComponent } from './vews/components/footer/footer.component';
import { CardsComponent } from './vews/components/cards/cards.component';
import { RightSidebarComponent } from './vews/components/menu/right-sidebar/right-sidebar.component';
import { TopSidebarComponent } from './vews/components/menu/top-sidebar/top-sidebar.component';

import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    FooterComponent,
    CardsComponent,
    TopSidebarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

