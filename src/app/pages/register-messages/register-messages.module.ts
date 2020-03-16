// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterMessagesRoutingModule } from './register-messages-routing.module';
import { SharedMaterial } from '../../modules/shared-material.module';

// Material
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Components
import { RegisterMessagesComponent } from './register-messages.component';

// Mask Plugin
import { TextMaskModule } from 'angular2-text-mask';

// Pipes
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
    MatSelectModule,
    MatSnackBarModule,
    SharedMaterial
  ],
  providers: [
    DatePipe
  ]
})
export class RegisterMessagesModule { }
