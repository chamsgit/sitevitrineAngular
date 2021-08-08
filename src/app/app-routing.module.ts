import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { ProposComponent } from './propos/propos.component';

const routes: Routes = [
  {path:"", component: BienvenueComponent},
  {path:"propos", component: ProposComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
