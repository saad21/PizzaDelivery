import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { pizza } from 'src/app/models/pizza';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  cart:Observable<pizza[]>
  cartLength:number;
  constructor(private appStore:Store<AppState>) { 
    this.cart = appStore.select('cart');
    appStore.select('cart').subscribe((res)=>{
this.cartLength = res.length;    })
  }

  ngOnInit(): void {
  }

}
