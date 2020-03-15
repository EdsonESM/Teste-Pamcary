import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from '../app/components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuService } from '../app/services/menu.service';
import { RegisterMessagesService } from '../app/services/register-messages.service';
import { EventsService } from '../app/services/events.service';

// LOCALE CONFIG
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    MenuService,
    RegisterMessagesService,
    EventsService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
