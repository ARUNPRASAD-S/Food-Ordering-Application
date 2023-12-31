import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/components/shared/model/Food';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
  foods: Food[]=[];
  constructor(public activatedRoute: ActivatedRoute, private foodService: FoodService, private cartService: CartService
    ,private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.foods=this.foodService.getFoodItemsById(params.id);
      }
    });
  }
  ngOnInit(): void {

  }
  addToCart() {
    this.cartService.addToCart(this.foods);
    this.router.navigateByUrl('/cart-page');
  }
}
