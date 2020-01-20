import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '../store';
import { AuthService, User } from '../auth/shared/services/auth/auth.service';
import { Observable } from 'rxjs-compat/Observable';
import { Subscription } from 'rxjs-compat/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Analyzer';
  user$: Observable<User>;
  subscription: Subscription;

  constructor(
    private store: Store,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.authService.auth$.subscribe(); // initiates data flow for subscription
    this.user$ = this.store.select<User>('user'); // returns an observable
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async onLogout() {
    await this.authService.logoutUser();
    this.router.navigate(['../auth/login']);
  }
}
