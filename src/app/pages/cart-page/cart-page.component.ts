import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/components/shared/model/Cart';
import { CartItem } from 'src/app/components/shared/model/CartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  title='Cart Page';
  cart!: Cart;
  value='1.5rem 0 0 2.5rem';
  constructor(private cartService: CartService) {
    this.cartService.getObservable().subscribe((res) => {
      this.cart = res;
    });
  }
  ngOnInit(): void {
  }
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
  }
  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }
}
