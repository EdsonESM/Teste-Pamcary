// Modules
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedMaterial } from './modules/shared-material.module';

// Components
import { AppComponent } from './app.component';
import { MenuComponent } from '../app/components/menu/menu.component';

// Pipes
import { DatePipe } from '@angular/common';

// Services
import { MenuService } from '../app/services/menu.service';
import { RegisterMessagesService } from '../app/services/register-messages.service';

// LOCALE CONFIG
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterial
  ],
  providers: [
    DatePipe,
    MenuService,
    RegisterMessagesService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
