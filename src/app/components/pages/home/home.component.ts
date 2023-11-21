import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from '../../shared/model/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  origins:any;
  constructor(private foodService: FoodService) {
    this.foods = this.foodService.getAll();
  }
  ngOnInit(): void {
  }
}