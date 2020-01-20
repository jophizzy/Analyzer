import { Component, OnInit } from '@angular/core';
import db from '../../db.json';
import * as data from '../../interfaces/interface';

@Component({
  selector: 'app-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.scss']
})
export class MyPieChartComponent implements OnInit {

  constructor() { }

  pieChartToppingData: number[];
  pieChartToppingLabel: string[];
  topping: data.Topping[];
  pizza: data.Pizza[];

  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';

  ngOnInit() {
    this.pieChartToppingData = [];
    this.pieChartToppingLabel = [];
    this.pizza = db.pizzas;
    this.topping = db.toppings;
    this.topping.forEach(element => {
      (this.pieChartToppingData).push(element.count);
      (this.pieChartToppingLabel).push(element.name);
    });
  }

}
