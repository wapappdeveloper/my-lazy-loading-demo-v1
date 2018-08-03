import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page-1.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'page-1', component: Page1Component }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    Page1Component
  ],exports:[
    Page1Component
  ]
})
export class Page1Module { }
