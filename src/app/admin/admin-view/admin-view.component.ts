import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {
  companyIsCollapsed: boolean = true;
  customerIsCollapsed: boolean = true;
  
  constructor() { }

  showCompanies(){
    this.companyIsCollapsed = !this.companyIsCollapsed;
 }
 showCustomers(){
   this.customerIsCollapsed = !this.customerIsCollapsed;
 }

  ngOnInit() {
  }

}
