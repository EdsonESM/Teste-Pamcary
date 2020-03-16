// Modules
import { NgModule } from '@angular/core';

// Material
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  exports: [
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class SharedMaterial { }
