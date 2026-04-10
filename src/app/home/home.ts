import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodService } from '../services/food.service/food'; 
import { Food } from '../shared/models/Food';
import { StarRatingModule } from 'angular-star-rating'; 
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Search } from "../search/search"; 
import { Tags } from "../tags/tags"; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, StarRatingModule, RouterModule, Search, Tags], 
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
    foods: Food[] = [];
  constructor(private foodService: FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      else if (params['tag'])
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      else
        this.foods = this.foodService.getAll();
    })
  }

}