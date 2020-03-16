// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { RegisterMessagesComponent } from './register-messages.component';

const routes: Routes = [
  { path: '', component: RegisterMessagesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterMessagesRoutingModule { }
