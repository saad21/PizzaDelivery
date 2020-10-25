import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { cart } from 'src/app/models/cart';
import * as CartActions from '../../Actions/cart.action';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: cart[];
  total = 0;
  toast: any;
  toastMessage: any;
  constructor(private appStore: Store<AppState>) {
    this.appStore.select('cart').subscribe((res) => {
      this.cart = res;
      if (this.cart.length == 0) {
        this.total = 0;
      }
      this.cart.map((item) => {
        this.total += (item.quantity * item.price);
      });
    });
  }

  ngOnInit(): void {
    this.toast = 'none';
  }
  removeFromCart(item) {
    this.toast = 'block';
    this.toastMessage = `${item.name} removed from the cart`;
    this.appStore.dispatch(new CartActions.RemoveFromCart(item.id));
    setTimeout(() => {
      this.toast = 'none';
    }, 1000);
  }
  quantityUpdate(event, item) {
    const tempItem = { ...item };
    if (event.target.value <= 0) { event.target.value = 0; } this.total = 0;
    try {
      tempItem.quantity = parseInt(event.target.value);
      this.appStore.dispatch(new CartActions.UpdateCart(tempItem));
    } catch (error) {
      if (typeof event.target.value === 'number' && isFinite(event.target.value)) {
        tempItem.quantity = event.target.value;
        this.appStore.dispatch(new CartActions.UpdateCart(tempItem));
      }
    }
  }

  isNumber(value) {
    return typeof value === 'number' && isFinite(value);
  }
}
