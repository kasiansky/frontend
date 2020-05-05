import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { Page404Component } from './components/page404/page404.component'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { MaterialModule } from './material/material.module';
import { CompanyModule } from './company/company.module';
import { CustomerModule } from './customer/customer.module';
import { AddCouponComponent } from './company/add-coupon/add-coupon.component';
import { AuthGuard } from './services/autguard.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    CompanyModule,
    CustomerModule,
    ReactiveFormsModule,
  ],
  providers: [AddCouponComponent, AuthGuard, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
