import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  public customer: Customer;

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.api.getCustomerDetails().then(
      data => this.customer = data
    ),
    err => console.log(err);
  }
  

}
