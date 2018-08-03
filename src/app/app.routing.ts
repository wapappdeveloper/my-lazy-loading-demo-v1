import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'lazy-page', loadChildren: './page-1/page-1.module#Page1Module', data: { preload: true } }
];