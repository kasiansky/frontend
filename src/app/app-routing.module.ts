import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { AdminViewComponent } from './admin/admin-view/admin-view.component';
import { CompanyViewComponent } from './company/company-view/company-view.component';
import { CustomerViewComponent } from './customer/customer-view/customer-view.component';
import { AuthGuard } from './services/autguard.service';



const routes: Routes = [
  { path: "login", component: LoginComponent},
  { path: "home", component:HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "admin", component: AdminViewComponent, canActivate: [AuthGuard]},
  { path: "company", component: CompanyViewComponent, canActivate: [AuthGuard] },
  { path: "customer", component: CustomerViewComponent, canActivate: [AuthGuard] },
  

  { path: "**", component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
