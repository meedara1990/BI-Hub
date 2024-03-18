import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AutoCompleteComponent } from '../common/autocomplete.component';
import { UserService } from '../user.service';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbDropdownModule, AutoCompleteComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  // userService: any;
  userProfile: any;
  constructor(
    private readonly router: Router,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.userService.sendUserInfoEvent.subscribe((user: any) => {
      this.userProfile = user;
    });
  }
  isCollapsed = false;
  homepage() {
    this.router.navigate(['/']);
  }
  logout() {
    localStorage.clear();
    window.open(environment.awsSingleSignOut, '_self');
  }

  linktosupportEmail() {
    window.open('mailto:me@example.com', '_self');
  }
}
