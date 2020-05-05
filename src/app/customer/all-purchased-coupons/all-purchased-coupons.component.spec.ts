import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPurchasedCouponsComponent } from './all-purchased-coupons.component';

describe('AllPurchasedCouponsComponent', () => {
  let component: AllPurchasedCouponsComponent;
  let fixture: ComponentFixture<AllPurchasedCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPurchasedCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPurchasedCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
