// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedMaterial } from 'src/app/modules/shared-material.module';

// Material
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

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
    DashboardRoutingModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    SharedMaterial
  ]
})
export class DashboardModule { }
