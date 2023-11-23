import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from '../../shared/model/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(private foodService: FoodService, public activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.foods = this.foodService.getAllBySearchTerm(params.searchTerm)
      }
      else {
        this.foods = this.foodService.getAll();
      }
    });
  }
  ngOnInit() {
  }
}
