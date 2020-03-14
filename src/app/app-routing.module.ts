import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../app/pages/landing-page/landing-page.module').then(m => m.LandingPageModule),
    data: { preload: true }
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../app/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { preload: true }
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
