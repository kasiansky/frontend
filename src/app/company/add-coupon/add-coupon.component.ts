import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { ApiService } from 'src/app/services/api.service';
import { CouponTypes } from 'src/app/models/couponTypes';
import { StoreService } from 'src/app/services/store.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RxwebValidators } from "@rxweb/reactive-form-validators";


@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.scss']
})
export class AddCouponComponent implements OnInit {

  public coupon =  new Coupon();
  public t = new CouponTypes;
  types = this.t.getTypes();
  form: FormGroup;
  minDate: Date;
  

  constructor(public api: ApiService, private store: StoreService,
      private fb: FormBuilder) {
       const currentDate = new Date();
       this.minDate = currentDate;
      }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.pattern("^[0-9]+(\.|,)?[0-9]+$")]],
      type: ['', [Validators.required]],
      message: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern("^[0-9]+(\.|,)?[0-9]+$")]],
      image: [''],
      startDate: ['', [Validators.required]],
      endDate: ['', [RxwebValidators.minDate({fieldName: "startDate", operator: '>='}),
      Validators.required]],
    })
  }
  
  get title(){
    return this.form.get('title');
  }
  get amount(){
    return this.form.get('amount');
  }
  get type(){
    return this.form.get('type');
  }
  get message(){
    return this.form.get('message');
  }
  get price(){
    return this.form.get('price');
  }
  get image(){
    return this.form.get('image');
  }
  get startDate(){
    return this.form.get('startDate');
  }
  get endDate(){
    return this.form.get('endDate');
  }

  public create(): void {
    this.api.createCoupon(this.form.value).then(
      data => {
        const coupons = this.store.coupons;
        coupons.push(data);
        this.store.coupons = coupons;
        console.log(data)
        alert("coupon created")
      
    },err => alert(err.error.message)
    )
  }

  

 

}
