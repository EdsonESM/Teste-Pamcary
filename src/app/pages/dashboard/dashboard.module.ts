// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

// Components
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ListMessagesComponent } from '../../components/list-messages/list-messages.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ListMessagesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
