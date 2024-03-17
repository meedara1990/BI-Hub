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

  constructor(private authService: AuthService) {
    const redirectedUrl = window.location.href;
    const accessToken = localStorage.getItem(AppConstants.AWS.ACCESS_TOKEN);
    if (redirectedUrl.includes(AppConstants.AWS.CODE) == true) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const code = urlParams.get(AppConstants.AWS.CODE);
      if (code) {
        localStorage.setItem(AppConstants.AWS.CODE, code);

        if (!accessToken) {
          this.authService.getAuthToken(code).subscribe((response: any) => {
            console.log('response', response);
            localStorage.setItem(
              AppConstants.AWS.ACCESS_TOKEN,
              response.access_token
            );

            this.authService
              .getUserInfo(response.access_token)
              .subscribe((response: any) => {
                console.log(response);
                localStorage.setItem(
                  AppConstants.AWS.USER_PROFILE,
                  JSON.stringify(response)
                );
                // this.userService.setUser();
              });
          });
        }
      }
    }
  }

  ngOnInit(): void {
    this.checkAuthentication();
  }

  checkAuthentication() {
    console.log('called checkAuthentication');
    const isAWSCode = localStorage.getItem(AppConstants.AWS.CODE);
    if (isAWSCode == null) {
      localStorage.clear();
      this.isLoggedIn = false;
      window.open(environment.awsAuthorizeURL, '_self');
    } else {
      this.isLoggedIn = true;
      console.log('isAWSCode', isAWSCode);
    }
  }
}
