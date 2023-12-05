import { Injectable } from '@angular/core';
import { Cart } from '../components/shared/model/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../components/shared/model/Food';
import { CartItem } from '../components/shared/model/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  food:Food[]=[];
  public cart: Cart = this.getCartFromLocalStorage();
  public cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart)
  constructor() { }

  addToCart(food:any):void{
    let cartItem = this.cart.items.find(item => item.food.id === food)
    if (cartItem) {
      return;
    }
    else {
      this.cart.items.push(new CartItem(food));
      this.setToLocalStorage();
    }
  }
  removeFromCart(foodId: any) {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
    this.setToLocalStorage();

  }
  changeQuantity(foodId: any, quantity: number) {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (!cartItem) {
      return;
    }
    else {
      cartItem.quantity = quantity;
      cartItem.price = quantity * cartItem.food.price;
      this.setToLocalStorage();

    }
  }
  clearCart() {
    this.cart = new Cart();
    this.setToLocalStorage();
  }
  getObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }
  setToLocalStorage() {
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) =>
      prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) =>
      prevSum + currentItem.quantity, 0)
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }
  getCartFromLocalStorage() {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}
