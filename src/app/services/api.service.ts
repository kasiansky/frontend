import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private api: string = "http://springcoupon.us-east-2.elasticbeanstalk.com:5000/";
  private api: string = "http://t420:8080/";

  constructor(private httpClient: HttpClient, private auth: AuthenticationService) {}

  private async request(method: string, endpoint: string, body?: any): Promise<any> {
    try {

      const url = `${this.api}${endpoint}`;

      console.log(this.auth.token); 

      return this.httpClient.request(method, url, {
        body,
        headers: { authorization: this.auth.token },
      }).toPromise();
    } catch (e) {
      console.log(e);
    }
  }

  createCompany(company){
    return this.request('post', 'admin/createCompany', company)
  }

  getCompanies(){
    return this.request('get', 'admin/getAllCompanies')
  }

  deleteCompany(id){
    return this.request('delete', 'admin/removeCompany/' + id)
  }

  updateCompany(company){
    return this.request('put', 'admin/updateCompany', company)
  }
  getCompanyById(id){
    return this.request('get', 'admin/getCompany/' + id )
  }
  createCustomer(customer){
    return this.request('post', 'admin/createCustomer', customer)
  }
  getCustomers(){
    return this.request('get', 'admin/getAllCustomers')
  }

  deleteCustomer(id){
    return this.request('delete', 'admin/removeCustomer/' + id)
  }

  updateCustomer(customer){
    return this.request('put', 'admin/updateCustomer', customer)
  }
  getCustomerById(id){
    return this.request('get', 'admin/getCustomer/' + id )
  }
  createCoupon(coupon){
    return this.request('post', 'company/createCoupon', coupon)
  }
  getCoupons(){
    return this.request('get', 'company/getAllCoupons')
  }
  getCompanyDetails(){
    return this.request('get', 'company/getCompanyDetails')
  }
  getCoupon(id){
    return this.request('get', 'company/getCoupon/' + id)
  }
  getCouponByType(type){
    return this.request('get', 'company/getCouponByType/' + type)
  }
  removeCoupon(id){
    return this.request('delete', 'company/removeCoupon/' + id)
  }
  updateCoupon(coupon){
    return this.request('put', 'company/update', coupon)
  }
  getCustomerDetails(){
    return this.request('get', 'customer/getCustomerDetails')
  }
  getAllPurchasedCoupons(){
    return this.request('get', 'customer/getAllPurchasedCoupons')
  }
  getAllPurchasedCouponsByPrice(price){
    return this.request('get', 'customer/getAllPurchasedCouponsByPrice/' + price)
  }
  getAllPurchasedCouponsByType(type){
    return this.request('get', 'customer/getAllPurchasedCouponsByType/' + type)
  }
  purchaseCoupon(id){
    return this.request('post','customer/purchaseCoupon/' + id)
  }
  getAllSystemCoupons(){
    return this.request('get', 'customer/getAllSystemCoupons')
  }
  
}
