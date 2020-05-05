import { Component, OnInit } from '@angular/core';import { Customer } from 'src/app/models/customer';import { ApiService } from 'src/app/services/api.service';
import { StoreService } from 'src/app/services/store.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  
  form: FormGroup

  constructor(private api: ApiService, public store: StoreService) { }
  
  ngOnInit(){
    this.form = new FormGroup({
      customerName: new FormControl('',[Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }
  get customerName(){
    return this.form.get('customerName')
  }
  get password(){
    return this.form.get('password');
  }
  get email(){
    return this.form.get('email');
  }

  public create(): void {
    this.api.createCustomer(this.form.value).then(
      data =>{
        const customers = this.store.customers;
        customers.push(data); 
        this.store.customers = customers;
        console.log(data);
        window.alert("the new customer was created successfully")
      },
      err =>  window.alert(err.error.message)

    )
  }
  
  
 
    
  }
