import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import db from "../../../db.json";
import * as data from "../../../interfaces/interface";

@Component({
  selector: "app-pizza-bar-chart",
  templateUrl: "../pizza/pizza.component.html",
  styleUrls: ["../pizza/pizza.component.scss"]
})
export class BarChartPizzaComponent implements OnInit {
  //     constructor() { }

  //     pieChartToppingData: number[];
  //     pieChartToppingLabel: string[];
  //     topping: data.Topping[];
  //     pizza: data.Pizza[];

  //     //   public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  //     //   public pieChartData = [120, 150, 180, 90];
  //     public pieChartType = 'pie';

  //     ngOnInit() {
  //         this.pieChartToppingData = [];
  //         this.pieChartToppingLabel = [];
  //         this.pizza = db.pizzas;
  //         this.topping = db.toppings;
  //         this.topping.forEach(element => {
  //             (this.pieChartToppingData).push(element.count);
  //             (this.pieChartToppingLabel).push(element.name);
  //         });
  //     }

  // }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012"
  ];
  public barChartType = "bar";
  public barChartLegend = true;

  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
    { data: [28, 48, 40, 19, 86, 27, 100], label: "Series B" }
  ];

  constructor() {}

  ngOnInit() {}
}
