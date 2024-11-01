import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CircularMenu3Component } from './components/circular-menu-3/circular-menu-3.component';

export const routes: Routes = [
  { path: 'administrativo', component: MainComponent },
  { path: 'judicial', component: CircularMenu3Component },
  { path: '', redirectTo: '/administrativo', pathMatch: 'full' },
  { path: '**', redirectTo: '/administrativo' },
];
