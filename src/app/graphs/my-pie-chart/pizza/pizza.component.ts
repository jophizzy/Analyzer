import { Component, OnInit } from '@angular/core';
import db from '../../../db.json';
import * as data from '../../../interfaces/interface';

@Component({
    selector: 'app-pizza-pie-chart',
    templateUrl: './pizza.component.html',
    styleUrls: ['./pizza.component.scss']
})
export class PieChartPizzaComponent implements OnInit {

    constructor() { }

    pieChartPizzaData: number[];
    pieChartPizzaLabel: string[];
    topping: data.Topping[];
    pizza: data.Pizza[];

    // public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
    // public pieChartData = [120, 150, 180, 90];
    public pieChartType = 'pie';

    ngOnInit() {
        this.pieChartPizzaData = [];
        this.pieChartPizzaLabel = [];
        this.pizza = db.pizzas;
        this.topping = db.toppings;
        this.pizza.forEach(element => {
            (this.pieChartPizzaData).push(element.count);
            (this.pieChartPizzaLabel).push(element.name);
        });
    }

}
