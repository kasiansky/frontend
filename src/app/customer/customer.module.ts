import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { AllCouponsComponent } from './all-coupons/all-coupons.component';
import { AllPurchasedCouponsComponent } from './all-purchased-coupons/all-purchased-coupons.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CustomerViewComponent,  AllCouponsComponent, AllPurchasedCouponsComponent, CustomerDetailsComponent],
  imports: [
    CommonModule, MaterialModule, FormsModule
  ]
})
export class CustomerModule { }
