import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AutoCompleteComponent } from '../common/autocomplete.component';
import { UserService } from '../user.service';
import { environment } from '../../environments/environment';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbDropdownModule, AutoCompleteComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  userProfile: any;
  constructor(
    private readonly router: Router,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.subscription = this.userService.profileItem$.subscribe(
      (user) => (this.userProfile = user)
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  isCollapsed = false;
  homepage() {
    this.router.navigate(['/bi']);
  }
  logout() {
    localStorage.clear();
    window.open(environment.awsSingleSignOut, '_self');
  }

  linktosupportEmail() {
    window.open('mailto:me@example.com', '_self');
  }
}
