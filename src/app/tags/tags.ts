import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router'; 
import { FoodService } from '../services/food.service/food'; 
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  imports: [CommonModule, RouterModule], 
  templateUrl: './tags.html',
  styleUrl: './tags.scss',
})
export class Tags implements OnInit {
  @Input() foodPageTags?: string[];
  @Input() justifyContent: string = 'center';

  tags?: Tag[];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    if (!this.foodPageTags)
      this.tags = this.foodService.getAllTags();
  }
}