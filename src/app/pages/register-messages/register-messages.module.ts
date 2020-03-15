import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterMessagesRoutingModule } from './register-messages-routing.module';
import { RegisterMessagesComponent } from './register-messages.component';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { TextMaskModule } from 'angular2-text-mask';

import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [RegisterMessagesComponent],
  imports: [
    CommonModule,
    RegisterMessagesRoutingModule,

    TextMaskModule,

    FormsModule,
    ReactiveFormsModule,

    MatInputModule,
    MatSelectModule
  ],
  providers: [
    DatePipe
  ]
})
export class RegisterMessagesModule { }
