import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { VendingMachineComponent } from './vending-machine/vending-machine.component';



const routes: Routes = [
  { path: '', component: CompanyComponent},
  { path: 'company', component: CompanyComponent},
  { path: 'machine', component: VendingMachineComponent},
  { path: '**', component: CompanyComponent}
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
