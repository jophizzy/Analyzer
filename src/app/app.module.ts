import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

// feature modules
import { AuthModule } from "../auth/auth.module";
import { Store } from "store";
import { Routes, RouterModule } from "@angular/router";

// components
import { MyBarChartComponent } from "./graphs/my-bar-chart/my-bar-chart.component";
import { MyDoughnutChartComponent } from "./graphs/my-doughnut-chart/my-doughnut-chart.component";
import { MyPieChartComponent } from "./graphs/my-pie-chart/my-pie-chart.component";
import { MyRadarChartComponent } from "./graphs/my-radar-chart/my-radar-chart.component";
import { ChartComponent } from "./chart/chart.component";
import { AppHeaderComponent } from "./components/app-header/app-header.component";
import { AppNavComponent } from "./components/app-nav/app-nav.component";

// subComponents
import { BarChartPizzaComponent } from "./graphs/my-bar-chart/pizza/pizza.component";
import { PieChartPizzaComponent } from "./graphs/my-pie-chart/pizza/pizza.component";
import { RadarChartPizzaComponent } from "./graphs/my-radar-chart/pizza/pizza.component";
import { DoughnutChartPizzaComponent } from "./graphs/my-doughnut-chart/pizza/pizza.component";
import { BarChartToppingComponent } from "./graphs/my-bar-chart/topping/topping.component";
import { PieChartToppingComponent } from "./graphs/my-pie-chart/topping/topping.component";
import { DoughnutChartToppingComponent } from "./graphs/my-doughnut-chart/topping/topping.component";
import { RadarChartToppingComponent } from "./graphs/my-radar-chart/topping/topping.component";

// modules
import { HealthModule } from "../health/health.module";
import { CharterModule } from "./chart/chart.module";
import { MaterialModule } from "./material.module";
import { ChartsModule } from "ng2-charts";
import { AuthGuard } from "../auth/shared/guards/auth.guard";

// routes
export const ROUTES: Routes = [
  {
    path: "graphs/my-bar-chart",
    canActivate: [AuthGuard],
    component: MyBarChartComponent
  },
  { path: "home", canActivate: [AuthGuard], component: HomeComponent },
  {
    path: "graphs/my-doughnut-chart",
    canActivate: [AuthGuard],
    component: MyDoughnutChartComponent
  },
  {
    path: "graphs/my-pie-chart",
    canActivate: [AuthGuard],
    component: MyPieChartComponent
  },
  {
    path: "graphs/my-radar-chart",
    canActivate: [AuthGuard],
    component: MyRadarChartComponent
  },
  {
    path: "graphs/my-pie-chart/pizza",
    canActivate: [AuthGuard],
    component: PieChartPizzaComponent
  },
  {
    path: "graphs/my-radar-chart/pizza",
    canActivate: [AuthGuard],
    component: RadarChartPizzaComponent
  },
  {
    path: "graphs/my-doughnut-chart/pizza",
    canActivate: [AuthGuard],
    component: DoughnutChartPizzaComponent
  },
  {
    path: "graphs/my-bar-chart/pizza",
    canActivate: [AuthGuard],
    component: BarChartPizzaComponent
  },
  {
    path: "graphs/my-bar-chart/topping",
    canActivate: [AuthGuard],
    component: BarChartToppingComponent
  },
  {
    path: "graphs/my-pie-chart/topping",
    canActivate: [AuthGuard],
    component: PieChartToppingComponent
  },
  {
    path: "graphs/my-doughnut-chart/topping",
    canActivate: [AuthGuard],
    component: DoughnutChartToppingComponent
  },
  {
    path: "graphs/my-radar-chart/topping",
    canActivate: [AuthGuard],
    component: RadarChartToppingComponent
  },
  { path: "", pathMatch: "full", redirectTo: "schedule" }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    AppNavComponent,
    MyBarChartComponent,
    MyDoughnutChartComponent,
    MyPieChartComponent,
    MyRadarChartComponent,
    ChartComponent,
    PieChartPizzaComponent,
    RadarChartPizzaComponent,
    DoughnutChartPizzaComponent,
    BarChartPizzaComponent,
    BarChartToppingComponent,
    PieChartToppingComponent,
    DoughnutChartToppingComponent,
    RadarChartToppingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MaterialModule,
    ChartsModule,
    AuthModule,
    HealthModule,
    CharterModule
    // BarChartModule,
    // PieChartModule,
    // DoughnutChartModule,
    // RadarChartModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {}
