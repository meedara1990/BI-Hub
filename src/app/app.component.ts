import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { AppConstants } from './app.constants';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    NgbDropdownModule,
    CommonModule,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MainDashboardComponent
  ]
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {
    console.log('app component constructor called');
    const redirectedUrl = window.location.href;
    if (redirectedUrl.includes(AppConstants.AWS.CODE) == true) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const code = urlParams.get(AppConstants.AWS.CODE);
      if (code) {
        localStorage.setItem(AppConstants.AWS.CODE, code);
        this.populateUserAuthentication();
      }
    }
  }

  private populateUserAuthentication() {
    console.log('called user auth check');
    const code = localStorage.getItem(AppConstants.AWS.CODE);
    const accessToken = localStorage.getItem(AppConstants.AWS.ACCESS_TOKEN);
    if (code && !accessToken) {
      this.authService.getAuthToken(code).subscribe((response: any) => {
        console.log('Auth response', response);
        localStorage.setItem(
          AppConstants.AWS.ACCESS_TOKEN,
          response.access_token
        );
        this.populateUserInfo(response.access_token);
        this.isLoggedIn = true;
      });
    } else if (accessToken != null) {
      this.populateUserInfo(accessToken);
      this.isLoggedIn = true;
    } else {
      console.log('User Auth Code is Empty');
      this.isLoggedIn = false;
    }
  }

  populateUserInfo(accessToken: string) {
    this.authService.getUserInfo(accessToken).subscribe(
      (response: any) => {
        console.log(response);
        localStorage.setItem(
          AppConstants.AWS.USER_PROFILE,
          JSON.stringify(response)
        );
        this.userService.setUser();
      },
      (error: HttpErrorResponse) => {
        console.log('Get profileInfo Error', error);
        if (error.status === 401) {
          this.redirectFOrAUthentication();
        }
      }
    );
  }

  ngOnInit(): void {
    console.log('check app component onInit');
    this.checkAuthentication();
  }

  checkAuthentication() {
    console.log(
      'called checkAuthentication from app component ',
      localStorage.getItem(AppConstants.AWS.CODE),
      localStorage.getItem(AppConstants.AWS.ACCESS_TOKEN)
    );
    const isAWSCode = localStorage.getItem(AppConstants.AWS.CODE);
    const accessToken = localStorage.getItem(AppConstants.AWS.ACCESS_TOKEN);
    if (isAWSCode == null || accessToken == null) {
      console.log('called checkAuthentication clearing cache');
      this.redirectFOrAUthentication();
    } else {
      this.populateUserAuthentication();
    }
  }

  private redirectFOrAUthentication() {
    localStorage.clear();
    this.isLoggedIn = false;
    window.open(environment.awsAuthorizeURL, '_self');
  }
}
