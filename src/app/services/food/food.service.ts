import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllFoodByTag(tag: string): Foods[] {
    return tag == "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));

  }

getAllTag():Tag[]{
  return [
    { name: 'All',count: 14},
    { name: 'FastFood',count: 4},
    { name: 'Pizza',count: 2},
    { name: 'Lunch',count: 10},
    { name: 'SlowFood',count: 5},
    { name: 'Burger',count: 2},
    { name: 'Fry',count: 1},
    { name: 'Pav',count: 4}
  ];

}

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Veg Burger',
        cookTime: '5-10',
        price: 2,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: 'assets/food1.jpeg',
        tags: ['FastFood', 'Burger', 'Breakfast'],
      },
      {
        id: 2,
        name: 'Pepperoni Pizza',
        price: 5,
        cookTime: '20-30',
        favorite: true,
        origins: ['India', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: 'assets/food2.jpeg',
        tags: ['SlowFood', 'Pizza', 'Lunch'],
      },
      {
        id: 3,
        name: 'French fries',
        price: 2,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: 'assets/food3.jpeg',
        tags: ['FastFood', 'French', 'fries'],
      },
      {
        id: 4,
        name: 'Veg Momos',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['nepal', 'china'],
        stars: 3.3,
        imageUrl: 'assets/food4.jpeg',
        tags: ['FastFood', 'momos', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Momos',
        price: 5,
        cookTime: '20-30',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: 'assets/food5.jpeg',
        tags: ['SlowFood', 'Momos'],
      },
      {
        id: 6,
        name: 'Twisty Potato',
        price: 4,
        cookTime: '10-20',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'assets/food6.jpeg',
        tags: ['FastFood', 'Twisty', 'Lunch'],
      },
      {
        id: 7,
        name: 'Vada Pav',
        price: 2,
        cookTime: '10-15',
        favorite: false,
        origins: ['india'],
        stars: 4.0,
        imageUrl: 'assets/food7.jpeg',
        tags: ['FastFood', 'Pav', 'Lunch'],
      },
      {
        id: 8,
        name: 'Idli',
        price: 2,
        cookTime: '20-30',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'assets/food8.jpeg',
        tags: ['FastFood', 'Idli', 'Lunch'],
      },
      {
        id: 9,
        name: 'Tandoori Momos',
        price: 5,
        cookTime: '20-30',
        favorite: false,
        origins: ['india', 'nepal'],
        stars: 4.0,
        imageUrl: 'assets/food9.jpg',
        tags: ['FastFood', 'Momos', 'Lunch'],
      },
      {
        id: 10,
        name: 'Samosa',
        price: 2,
        cookTime: '10-15',
        favorite: false,
        origins: ['india'],
        stars: 4.0,
        imageUrl: 'assets/food10.jpeg',
        tags: ['FastFood', 'Samosa', 'Lunch'],
      },
      {
        id: 11,
        name: 'Pastry',
        price: 3,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy', 'rome'],
        stars: 4.0,
        imageUrl: 'assets/food11.jpeg',
        tags: ['FastFood', 'Pasrty', 'Lunch'],
      },
      {
        id: 12,
        name: 'Vegetables Pasta',
        price: 3,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'assets/food12.jpeg',
        tags: ['FastFood', 'Pasta', 'Lunch'],
      },
      {
        id: 13,
        name: 'Sandwich',
        price: 3,
        cookTime: '20-30',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'assets/food13.jpeg',
        tags: ['FastFood', 'Sandwich', 'Lunch'],
      },
      {
        id: 14,
        name: 'Pav Bhaji',
        price: 3,
        cookTime: '20-30',
        favorite: false,
        origins: ['asia', 'india'],
        stars: 4.0,
        imageUrl: 'assets/food14.jpeg',
        tags: ['FastFood', 'Pav', 'Lunch'],
      },
      {
        id: 15,
        name: 'Dosa',
        price: 9,
        cookTime: '20-30',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'assets/food15.jpg',
        tags: ['FastFood', 'Dosa', 'Lunch'],
      },
      {
        id: 16,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'assets/food16.jpeg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      }


    ];
  }
}
