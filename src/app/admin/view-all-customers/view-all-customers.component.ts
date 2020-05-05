import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { ApiService } from 'src/app/services/api.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-view-all-customers',
  templateUrl: './view-all-customers.component.html',
  styleUrls: ['./view-all-customers.component.scss']
})
export class ViewAllCustomersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'customerName', 'password', 'email', 'buttons'];
  public customers: Customer[];
  public customer:  Customer;
  editedCustomer: Customer | null;
  editedCustomerMaster: Customer | null;
  
  constructor(private api: ApiService, public store: StoreService) { }


  ngOnInit() {
    this.getCustomers();

    this.store.customersStoreChanged.subscribe(
      () =>{
        const customers = this.store.customers;
        this.customers = customers.slice();
        console.log('CUSTOMERS REFRESH: ', customers);
      }
    )
  }

  getCustomers(){
    this.api.getCustomers().then(data => {
      this.store.customers = data;
    });
  }

  editCustomer(index){
    this.editedCustomer = this.store.customersStored[index];
    //this.editedCustomerMaster = Object.assign({}, this.Customers[index]);
  }

  cancelEditCustomer(){
    this.editedCustomer = null;
  }

  saveEditedCustomer(index){
    this.api.updateCustomer(this.editedCustomer).then(
      data => {
        console.log(data);
        this.editedCustomer = null;
      },
      error => {
        this.editedCustomer = null;
        alert('Customer is not saved');
        alert(error.error.message)
        //this.Customers[index] = Object.assign({}, this.editedCustomerMaster);
        this.getCustomers();
      }
    )
  }
  deleteCustomer(id){
    this.api.deleteCustomer(id).then(
      response => {
        console.log(response, id);
        let customers = this.store.customers;
        customers = customers.filter(c => c.id !== id);
        this.store.customers = customers;
        window.alert("the customer deleted successfully")
      },
      err => {
        console.log(err);
        alert(err.error.message)
      }
    )
  }
  getCustomerById(event: Event){
    const id = (event.target as HTMLInputElement).value
    if(id){
      this.getSingleCustomer(id);
    } else {
      this.getCustomers();
    }
  }

  getSingleCustomer(id){
    this.api.getCustomerById(id).then(
      data => {
       // this.store.customers = [data];
        
      },
      err => {console.log(err)
      alert(err.error.message)
       } )
  }

}
