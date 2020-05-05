import { Component, OnInit } from '@angular/core';

import { Company } from 'src/app/models/company';
import { ApiService } from 'src/app/services/api.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-view-all-companies',
  templateUrl: './view-all-companies.component.html',
  styleUrls: ['./view-all-companies.component.scss']
})
export class ViewAllCompaniesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'companyName', 'password', 'email', 'buttons'];
  public companies:  Company[];
  public company:  Company;
  editedCompany: Company | null;
  editedCompanyMaster: Company | null;

  constructor(private api: ApiService, public store: StoreService) { }
  
 
 

  ngOnInit() {
      this.getCompanies();

      this.store.companiesStoreChanged.subscribe(
        () =>{
          const companies = this.store.companies;
          this.companies = companies.slice();
          console.log('CUSTOMERS REFRESH: ', companies);
        }
      )
    
  }

  getCompanies(){
    this.api.getCompanies().then(data => {
      this.store.companies = data
    });
  }

  editCompany(index){
    this.editedCompany = this.companies[index];
    //this.editedCompanyMaster = Object.assign({}, this.companies[index]);
  }

  cancelEditCompany(){
    this.editedCompany = null;
  }

  saveEditedCompany(index){
    this.api.updateCompany(this.editedCompany).then(
      data => {
        console.log(data);
        this.editedCompany = null;
      },
      error => {
        this.editedCompany = null;
        alert('Company is not saved');
        alert(error.error.message)
        //this.companies[index] = Object.assign({}, this.editedCompanyMaster);
        this.getCompanies();
      }
    )
  }
  deleteCompany(id){
    this.api.deleteCompany(id).then(
      response => {
        console.log(response);
        let companies = this.store.companies;
        companies = companies.filter(c => c.id !== id);
        this.store.companies = companies;
        alert("company deleted")
      },
      err => {
        console.log(err);
        alert(err.error.message)
      }
    )
  }
  getCompanyById(event: Event){
    const id = (event.target as HTMLInputElement).value
    if(id){
      this.getSingleCompany(id);
    } else {
      this.getCompanies();
    }
  }

  getSingleCompany(id){
    this.api.getCompanyById(id).then(
      data => {
        this.companies = [data];
        
      },
      err => {console.log(err)
      alert(err.error.message)
      })
  }


}
