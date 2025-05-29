import { RouterModule, Routes } from '@angular/router';
import { NewAppComponent } from './new-app/new-app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [{path:'',component:NewAppComponent},{path:'dashboard',component:DashboardComponent}];
export class AppRoutingModule { }
