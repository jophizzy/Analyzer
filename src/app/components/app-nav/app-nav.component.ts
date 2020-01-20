import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-nav',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['../app-nav/app-nav.component.scss'],
    templateUrl: '../app-nav/app-nav.component.html',
})

export class AppNavComponent {
    constructor() { }
}
