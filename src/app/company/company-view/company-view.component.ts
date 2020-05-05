import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.scss']
})
export class CompanyViewComponent implements OnInit {

  couponIsCollapsed: boolean = true;
  companyIsCollapsed: boolean = true;

  constructor() { }

  showCoupons(){
    this.couponIsCollapsed = !this.couponIsCollapsed;
  }
  showCompanyDetails(){
    this.companyIsCollapsed = !this.companyIsCollapsed;
  }

  ngOnInit() {
  }

}
