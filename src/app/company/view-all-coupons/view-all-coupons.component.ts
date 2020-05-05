import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Coupon } from 'src/app/models/coupon';
import { Router } from '@angular/router';
import { CouponTypes } from 'src/app/models/couponTypes';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-view-all-coupons',
  templateUrl: './view-all-coupons.component.html',
  styleUrls: ['./view-all-coupons.component.scss']
})
export class ViewAllCouponsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'startDate', 'endDate', 'amount', 'type', 'message', 'price', 'image', 'buttons'];
  public coupons:  Coupon[];
  public coupon:  Coupon;
  editedCoupon: Coupon | null;
  editedCouponMaster: Coupon | null;
  couponType: string;
  public t = new CouponTypes;
   
  types = this.t.getTypes();
  
  

  constructor(public api: ApiService, public router: Router, private store: StoreService) { }

  

  ngOnInit() {
    this.getCoupons();

    this.store.couponsStoreChanged.subscribe(
      () =>{
        const coupons = this.store.coupons;
        this.coupons = coupons.slice();
        console.log('Coupons REFRESH: ', coupons);
      }
    )
  }

  getCouponByType(couponType){
    this.api.getCouponByType(couponType).then(
      data => this.coupons = data
    ),err => {console.log(err);
    alert(err.error.message)
   } }

  getCoupons(){
    this.api.getCoupons().then(data => {
      this.store.coupons = data
    });
  }

  editCoupon(index){
    this.editedCoupon = this.coupons[index];
    //this.editedCouponMaster = Object.assign({}, this.companies[index]);
  }

  cancelEditCoupon(){
    this.editedCoupon = null;
  }

  saveEditedCoupon(index){
    this.api.updateCoupon(this.editedCoupon).then(
      data => {
        console.log(data);
        this.editedCoupon = null;
      },
      error => {
        this.editedCoupon = null;
        alert('Coupon is not saved');
        alert(error.error.message)
        //this.companies[index] = Object.assign({}, this.editedCouponMaster);
        this.getCoupons();
      }
    )
  }
  deleteCoupon(id){
    this.api.removeCoupon(id).then(
      response => {
        console.log(response);
        let coupons = this.store.coupons;
        coupons = coupons.filter(c => c.id !== id);
        this.store.coupons = coupons;
        alert("coupon deleted")
      },
      err => {
        console.log(err);
        alert(err.error.message)
      }
    )
  }
  getCouponById(event: Event){
    const id = (event.target as HTMLInputElement).value
    if(id){
      this.getSingleCoupon(id);
    } else {
      this.getCoupons();
    }
  }

  getSingleCoupon(id){
    this.api.getCoupon(id).then(
      data => {
        this.coupons = [data];
        
      },
      err => console.log(err)
    )
  }
  cancel(){
    this.getCoupons();
  }

}
