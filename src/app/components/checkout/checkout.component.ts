import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { FormControl,FormGroup,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import * as CartActions from '../../Actions/cart.action'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems:any;
  total: number =0;
  form:any;
  confirmationDialoag: any;

  constructor(private appStore:Store<AppState>, private router:Router,private formBuilder: FormBuilder) { 
    this.appStore.select('cart').subscribe((res)=>{
      this.cartItems = res;
      if(this.cartItems.length==0)
      {
        this.total = 0;
      }
      this.cartItems.map((item)=>{
        this.total += (item.quantity*parseInt(item.price))
      })
    })
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],

      email: ['', Validators.email],

      phone: ['', Validators.required],
      address: ['', Validators.required],
    });
  }
  navigateToHome() {
    this.router.navigateByUrl('');
  }
  saveOrder(){
    this.appStore.dispatch(new CartActions.EmptyCart());
    this.confirmationDialoag = 'block';
  }
  ngOnInit(): void {
    this.confirmationDialoag = 'none';
  }

}
