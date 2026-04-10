import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FoodService } from '../services/food.service/food'; 
import { Food } from '../shared/models/Food';
import { Tags } from "../tags/tags";
import { StarRatingModule } from "angular-star-rating";


@Component({
  selector: 'app-food-page',
  imports: [CommonModule, Tags, StarRatingModule], 
  templateUrl: './food-page.html',
  styleUrl: './food-page.scss',
})
export class FoodPage implements OnInit {
  food!: Food;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService, 
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.food = this.foodService.getFoodById(params['id']);
      }
    });
  }

  ngOnInit(): void {}

  addToCart() {
    // Здесь будет логика корзины
    this.router.navigateByUrl('/cart-page');
  }
}