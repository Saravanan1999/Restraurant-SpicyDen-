import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Dish[];
  lunches:Dish[];
  hotbeverages:Dish[];
  coldbeverages:Dish[];
  starters:Dish[];
  sweets:Dish[];
  dinnerspecial:Dish[];

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.dishes = this.dishService.getDishes();
    this.lunches = this.dishService.getLunches();
    this.hotbeverages = this.dishService.getHotbeverages();
    this.coldbeverages = this.dishService.getColdbeverages();
    this.sweets = this.dishService.getSweets();
    this.starters = this.dishService.getStarters();
    this.dinnerspecial = this.dishService.getDinnerspecial();
  }

}
