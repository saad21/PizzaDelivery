import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { Store, StoreModule } from '@ngrx/store';
import { pizzareducer } from '../app/Reducers/pizza.reducer';
import { reducer } from './Reducers/cart.reducer';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavBarComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({pizza:pizzareducer, cart:reducer}),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
