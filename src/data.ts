import { Tags } from "./app/components/shared/Tag";
import { Food } from "./app/components/shared/model/Food";

export const sample_foods: Food[] = [
  {
    id: 1,
    name: 'Pizza Pepperoni',
    cookTime: '10-20',
    price: 10,
    favourite: false,
    origins: ['Italy'],
    stars: 4.5,
    imageUrl: '/assets/images/foods/food-1.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id: 2,
    name: 'Meatball',
    price: 20,
    cookTime: '20-30',
    favourite: true,
    origins: ['Persia', 'Middle East', 'China'],
    stars: 4.7,
    imageUrl: '/assets/images/foods/food-2.jpg',
    tags: ['SlowFood', 'Lunch'],
  },
  {
    id: 3,
    name: 'Hamburger',
    price: 5,
    cookTime: '10-15',
    favourite: false,
    origins: ['Germany', 'US'],
    stars: 3.5,
    imageUrl: '/assets/images/foods/food-3.jpg',
    tags: ['FastFood', 'Hamburger'],
  },
  {
    id: 4,
    name: 'Fried Potatoes',
    price: 2,
    cookTime: '15-20',
    favourite: true,
    origins: ['Belgium', 'France'],
    stars: 3.3,
    imageUrl: '/assets/images/foods/food-4.jpg',
    tags: ['FastFood', 'Fry'],
  },
  {
    id: 5,
    name: 'Chicken Soup',
    price: 11,
    cookTime: '40-50',
    favourite: false,
    origins: ['India', 'Asia'],
    stars: 3.0,
    imageUrl: '/assets/images/foods/food-5.jpg',
    tags: ['SlowFood', 'Soup'],
  },
  {
    id: 6,
    name: 'Vegetables Pizza',
    price: 9,
    cookTime: '40-50',
    favourite: false,
    origins: ['Italy'],
    stars: 4.0,
    imageUrl: '/assets/images/foods/food-6.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  }
];
export const sample_tags:Tags[]=[
  { name: 'All', count: 6 },
  { name: 'FastFood', count: 4 },
  { name: 'Pizza', count: 2 },
  { name: 'Lunch', count: 3 },
  { name: 'SlowFood', count: 2 },
  { name: 'Hamburger', count: 1 },
  { name: 'Fry', count: 1 },
  { name: 'Soup', count: 1 }
]