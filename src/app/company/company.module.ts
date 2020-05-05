import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyViewComponent } from './company-view/company-view.component';
import { AddCouponComponent } from './add-coupon/add-coupon.component';
import { ViewAllCouponsComponent } from './view-all-coupons/view-all-coupons.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CompanyViewComponent, AddCouponComponent, ViewAllCouponsComponent, CompanyDetailsComponent],
  providers: [],
  imports: [
    CommonModule, MaterialModule, FormsModule,
    RouterModule, ReactiveFormsModule
  ]
})
export class CompanyModule { }
