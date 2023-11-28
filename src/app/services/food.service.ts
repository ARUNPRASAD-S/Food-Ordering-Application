import { Injectable } from '@angular/core';
import { Food } from '../components/shared/model/Food';
import { sample_foods, sample_tags } from 'src/data';
import { Tags } from '../components/shared/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Food[]{
    return sample_foods;
  }
  getAllBySearchTerm(searchTerm:string){
    return this.getAll().filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  getAllTags():Tags[]{
  return sample_tags;
  }
  getAllItemsByTags(tags:string):Food[]{
    return tags == 'All' ? this.getAll() :this.getAll().filter(food => food.tags?.includes(tags));
  }
  getFoodItemsById(foodId:any):Food[]{
    return this.getAll().filter(food=>food.id==foodId)??new Food();
  }
}
