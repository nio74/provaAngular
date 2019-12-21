import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EventsComponent } from './events/events.component';
import { SideSxComponent } from './side-sx/side-sx.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EventsComponent,
    SideSxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
