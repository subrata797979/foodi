import { Component, OnInit } from '@angular/core';
import {FoodService} from "../service/food.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  categories: any;

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.getFoodCategoriesFrontend();
  }

  public getFoodCategoriesFrontend() {
    this.foodService.getFoodCategories().subscribe((data) => {
      this.categories = data.categories;
      console.log(this.categories);
    })
  }

}
