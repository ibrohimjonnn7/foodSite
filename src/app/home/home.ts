import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodService } from '../services/food.service/food'; 
import { Food } from '../shared/models/Food';
import { StarRatingModule } from 'angular-star-rating'; 
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, StarRatingModule, RouterModule], 
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  foods: Food[] = [];

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }
}