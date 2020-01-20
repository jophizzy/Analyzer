import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../auth/shared/services/auth/auth.service';

@Component({
  selector: 'app-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
