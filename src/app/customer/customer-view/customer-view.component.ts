import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  customerIsCollapsed: boolean = true;

  constructor() { }

  showCustomerDetails(){
    this.customerIsCollapsed = !this.customerIsCollapsed;
  }

  ngOnInit() {
  }

}
