import { Component, OnInit } from '@angular/core';
import db from '../../../db.json';
import * as data from '../../../interfaces/interface';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
    selector: 'app-topping-bar-chart',
    templateUrl: '../topping/topping.component.html',
    styleUrls: ['../topping/topping.component.scss']
})
export class BarChartToppingComponent implements OnInit {

    public barChartOptions = {
        scaleShowVerticalLines: false,
        responsive: true
    };

    public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType = 'bar';
    public barChartLegend = true;

    public barChartData = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ];

    constructor() { }

    ngOnInit() {
    }

}

