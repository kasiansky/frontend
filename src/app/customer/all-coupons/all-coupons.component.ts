import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Coupon } from 'src/app/models/coupon';
import { StoreService } from 'src/app/services/store.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-all-coupons',
  templateUrl: './all-coupons.component.html',
  styleUrls: ['./all-coupons.component.scss']
})
export class AllCouponsComponent implements OnInit {
  displayedColumns: string[] = [ 'title', 'startDate', 'endDate', 'amount', 'type', 'message', 'price', 'image', 'buttons'];
  public coupons: Coupon[];
  

  constructor(public api: ApiService,private store: StoreService, private errorService: ErrorService) { }

  ngOnInit() {
    this.api.getAllSystemCoupons().then(
      data => {
        this.coupons = data
      },
    err => console.log(err)
    )
  }

  public purchase(id): void{
    this.api.purchaseCoupon(id).then(
      response => {
        const purchasedCoupons = this.store.purchasedCoupons;
        const coupon = this.coupons.find(c => c.id === id);
        purchasedCoupons.push(coupon);
        this.store.purchasedCoupons = purchasedCoupons;
        console.log(response)
        alert("Coupon got Purchased successfully!")
      }, 
    err => {console.log(err)
      alert(err.error.message)
    })
  }

}
