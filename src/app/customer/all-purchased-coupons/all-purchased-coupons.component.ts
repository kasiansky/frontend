import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { ApiService } from 'src/app/services/api.service';
import { CouponTypes } from 'src/app/models/couponTypes';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-all-purchased-coupons',
  templateUrl: './all-purchased-coupons.component.html',
  styleUrls: ['./all-purchased-coupons.component.scss']
})
export class AllPurchasedCouponsComponent implements OnInit {

  displayedColumns: string[] = [ 'title', 'startDate', 'endDate', 'amount', 'type', 'message', 'price', 'image', 'buttons'];
  public coupons: Coupon[];
  public t = new CouponTypes;
  types = this.t.getTypes();
  price: number;

  constructor(public api: ApiService, private store: StoreService) { }


  ngOnInit() {
    this.getAllPurchasedCoupons();

    this.store.purchasedCouponsStoreChanged.subscribe(
      () => {
        const purchasedCoupons = this.store.purchasedCoupons;
        this.coupons = purchasedCoupons.slice();
        console.log('COUPONS REFRESH: ', purchasedCoupons);
      }
    )
  }
  getAllPurchasedCoupons(){
    this.api.getAllPurchasedCoupons().then(
      data => {
        this.store.purchasedCoupons = data;
      },
    err => console.log(err)
    )
  }
  getAllPurchasedCouponsByType(type){
    this.api.getAllPurchasedCouponsByType(type).then(
      data => this.coupons = data
    ),
    err => console.log(err);
  }
  getAllPurchasedCouponsByPrice(){
    this.api.getAllPurchasedCouponsByPrice(this.price).then(
      data => this.coupons = data
    ),
    err => console.log(err);
  }
  cancel(){
    this.api.getAllPurchasedCoupons().then(
    data => this.coupons = data
    ),
    err => console.log(err);
  }


}
