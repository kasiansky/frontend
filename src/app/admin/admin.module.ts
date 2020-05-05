import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewAllCompaniesComponent } from './view-all-companies/view-all-companies.component';
import { ViewAllCustomersComponent } from './view-all-customers/view-all-customers.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { MaterialModule } from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StoreService } from '../services/store.service';





@NgModule({
  declarations: [ 
      AdminViewComponent,
      AddCustomerComponent,
      ViewAllCompaniesComponent, 
      ViewAllCustomersComponent, 
      AddCompanyComponent],
  imports: [
    CommonModule, MaterialModule,FormsModule,
    ReactiveFormsModule   
  ],
  providers: [
    StoreService
  ]
})
export class AdminModule { }
