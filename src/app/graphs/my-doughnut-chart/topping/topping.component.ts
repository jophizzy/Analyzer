import { Component, OnInit } from "@angular/core";
import db from "../../../db.json";
import * as data from "../../../interfaces/interface";

@Component({
  selector: "app-topping-doughnut-chart",
  templateUrl: "../topping/topping.component.html",
  styleUrls: ["../topping/topping.component.scss"]
})
export class DoughnutChartToppingComponent implements OnInit {
  constructor() {}

  doughnutChartData: number[];
  doughnutChartLabels: string[];
  topping: data.Topping[];
  pizza: data.Pizza[];

  // public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  // public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = "doughnut";

  ngOnInit() {
    this.doughnutChartData = [];
    this.doughnutChartLabels = [];
    this.pizza = db.pizzas;
    this.topping = db.toppings;
    this.topping.forEach(element => {
      this.doughnutChartData.push(element.count);
      this.doughnutChartLabels.push(element.name);
    });
  }
}
