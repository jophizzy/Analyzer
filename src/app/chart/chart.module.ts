import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../auth/shared/guards/auth.guard';
import { ChartComponent } from './chart.component';

export const ROUTES: Routes = [
    { path: 'chart', canActivate: [AuthGuard], component: ChartComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ]
})
export class CharterModule { }
