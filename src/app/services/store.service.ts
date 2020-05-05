import { Injectable, EventEmitter } from '@angular/core';
import { Customer } from '../models/customer';
import { Company } from '../models/company';
import { Coupon } from '../models/coupon';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public customersStoreChanged = new EventEmitter();
  public companiesStoreChanged = new EventEmitter();
  public couponsStoreChanged = new EventEmitter();
  public purchasedCouponsStoreChanged = new EventEmitter();

  constructor() { }

  public customersStored: Customer[] = [];
  public companiesStored: Company[] = [];
  public couponsStored: Coupon[] = [];
  public purchasedCouponsStored: Coupon[] = [];

  get customers() {
    return this.customersStored;
  }

  set customers(value) {
     this.customersStored = value;
     this.customersStoreChanged.emit();
     console.log('NEW VALUE: ', value);
  }
  get companies(){
    return this.companiesStored;
  }
  set companies(value) {
    this.companiesStored = value;
    this.companiesStoreChanged.emit();
  }
  get coupons() {
    return this.couponsStored;
  }
  set coupons(value){
    this.couponsStored = value;
    this.couponsStoreChanged.emit();
  }

  get purchasedCoupons(){
    return this.purchasedCouponsStored;
  }
  set purchasedCoupons(value){
    this.purchasedCouponsStored = value;
    this.purchasedCouponsStoreChanged.emit();
  }


}
