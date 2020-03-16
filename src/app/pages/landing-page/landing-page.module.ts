// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { SharedMaterial } from 'src/app/modules/shared-material.module';

// Components
import { LandingPageComponent } from './landing-page.component';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedMaterial
  ]
})
export class LandingPageModule { }
