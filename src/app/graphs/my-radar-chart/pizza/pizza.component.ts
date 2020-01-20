import { Component, OnInit } from '@angular/core';
import db from '../../../db.json';
import * as data from '../../../interfaces/interface';

@Component({
    selector: 'app-pizza-radar-chart',
    templateUrl: '../pizza/pizza.component.html',
    styleUrls: ['../pizza/pizza.component.scss']
})
export class RadarChartPizzaComponent implements OnInit {

    //     constructor() { }

    //     pieChartToppingData: number[];
    //     pieChartToppingLabel: string[];
    //     topping: data.Topping[];
    //     pizza: data.Pizza[];

    //     // public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
    //     // public pieChartData = [120, 150, 180, 90];
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
    public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
    public radarChartData = [
        { data: [120, 130, 180, 70], label: '2017' },
        { data: [90, 150, 200, 45], label: '2018' }
    ];
    public radarChartType = 'radar';

    constructor() { }

    ngOnInit() {
    }

}
