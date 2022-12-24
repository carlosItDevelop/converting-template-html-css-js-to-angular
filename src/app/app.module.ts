import { RightSidebarComponent } from './views/components/menu/right-sidebar/right-sidebar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './views/components/cards/cards.component';
import { FooterComponent} from './views/components/footer/footer.component';
import { TopSidebarComponent } from './views/components/menu/top-sidebar/top-sidebar.component';
import { LeftSidebarComponent } from './views/components/menu/left-sidebar/left-sidebar.component';
//import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    FooterComponent,
    TopSidebarComponent,
    RightSidebarComponent,
    LeftSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
