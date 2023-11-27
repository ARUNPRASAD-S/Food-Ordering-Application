import { Component, OnInit } from '@angular/core';
import { Tags } from 'src/app/components/shared/Tag';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags?: Tags[];
  constructor(private foodService:FoodService) {
    this.tags=this.foodService.getAllTags();
   }
  ngOnInit(): void {
  }

}
