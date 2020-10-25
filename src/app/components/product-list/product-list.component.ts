import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { pizza } from '../../models/pizza';
import { AppState } from '../../app.state';
import { Observable } from 'rxjs';
import * as CartActions from '../../Actions/cart.action'
import { cart } from 'src/app/models/cart';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pizzas: pizza[]
  cart: cart[];
  toast: any;
  toastMessage: any;
  constructor(private appStore: Store<AppState>) {
    appStore.select('pizza').subscribe((res) => {
      this.pizzas = res;
    })
    appStore.select('cart').subscribe((res) => {
      this.cart = res;
    })
  }

  ngOnInit(): void {
    this.toast = 'none';
  }
  addToCart(pizza) {
    let p = { ...pizza };
    var cartItem = this.cart.find(item => item.id == p.id);
    if (cartItem) {
      let tempCartItem = { ...cartItem };
      this.toast = 'block';
      tempCartItem.quantity = cartItem.quantity + 1;
      this.appStore.dispatch(new CartActions.UpdateCart(tempCartItem));
      this.toastMessage = `Items ${tempCartItem.quantity} for ${tempCartItem.name} updated in the cart `;
      setTimeout(() => {
        this.toast = 'none';
      }, 1000);
    }
    else {
      p.quantity = 1;
      this.appStore.dispatch(new CartActions.AddToCart(p));
      this.toast = 'block';
      this.toastMessage = `${p.name} added into the cart`;
      setTimeout(() => {
        this.toast = 'none';
      }, 1000);
    }
  }
}
