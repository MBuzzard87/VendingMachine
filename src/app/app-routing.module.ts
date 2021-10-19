import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { VendingMachineComponent } from './vending-machine/vending-machine.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';



const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'company', component: CompanyComponent},
  { path: 'machine', component: VendingMachineComponent},
  { path: '**', component: ErrorComponent}
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
