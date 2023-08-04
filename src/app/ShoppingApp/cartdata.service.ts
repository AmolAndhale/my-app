import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartdataService {
  private cartData:any[] = [];

  getCartData(): any[]{
    return this.cartData;
  }

  setCartData(data: any[]): void{
    this.cartData = data;
  }

  constructor() { }
}
