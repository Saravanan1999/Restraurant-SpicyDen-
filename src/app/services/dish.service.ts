import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { LUNCHES } from '../shared/lunches';
import { DINNERSPECIAL } from '../shared/dinnerspecial';
import { HOTBEVERAGES } from '../shared/hotbeverages';
import { COLDBEVERAGES } from '../shared/coldbeverages';
import { SWEETS } from '../shared/sweets';
import { STARTERS } from '../shared/starters';
@Injectable()
export class DishService {

  constructor() { }
  getDishes(): Dish[] {
    return DISHES;
  }
  getLunches():Dish[] {
    return LUNCHES;
  }
  getDinnerspecial():Dish[] {
    return DINNERSPECIAL;
  }
  getHotbeverages():Dish[] {
    return HOTBEVERAGES;
  }
  getColdbeverages():Dish[] {
    return COLDBEVERAGES;
  }
  getSweets():Dish[]{
    return SWEETS;
  }
  getStarters():Dish[]{
    return STARTERS;
  }
}

