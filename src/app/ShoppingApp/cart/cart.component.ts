import { Component, OnInit,Input } from '@angular/core';
import { CartdataService } from '../cartdata.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  

  cartData!: any[];

  constructor(private cartService: CartdataService){}
  

  ngOnInit(): void {

    this.cartData= this.cartService.getCartData();
    
  }


}