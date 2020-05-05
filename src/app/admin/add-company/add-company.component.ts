import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { ApiService } from 'src/app/services/api.service';
import { ErrorService } from 'src/app/services/error.service';
import { StoreService } from 'src/app/services/store.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';





@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {

 public company = new Company();
 isCollapsed = false;
 form: FormGroup;
 

  constructor(public api: ApiService,  private store: StoreService) { }

  ngOnInit() {
    this.form = new FormGroup({
      companyName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    }) 
  }
  get companyName(){
    return this.form.get('companyName');
  }
  get password(){
    return this.form.get('password');
  }
  get email(){
    return this.form.get('email');
  }
  
  public create(): void {
    this.api.createCompany(this.form.value).then(
      data =>{     
        const companies = this.store.companies;
        companies.push(data);
        this.store.companies = companies;
        console.log(data);
        window.alert("the new Company was created successfully!!")
      
      },
      
      err => {
        
       alert(err.error.message)
        
      })
  }
 

}
