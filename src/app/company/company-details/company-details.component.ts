import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {

  public company: Company;

  constructor(public api: ApiService) { }

  

  ngOnInit(): void{
    this.api.getCompanyDetails().then(
      data => this.company = data
    ),
    err => {console.log(err)
    alert(err.error.message)
  }}

}
