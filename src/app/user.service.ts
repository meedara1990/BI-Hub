/* eslint-disable @typescript-eslint/no-explicit-any */
import { EventEmitter, Injectable } from '@angular/core';
import { AppConstants } from './app.constants';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}
  sendUserInfoEvent = new EventEmitter<any>();
  SendUserInfoData(IsLoggedIn: any) {
    this.sendUserInfoEvent.emit(IsLoggedIn);
  }

  public setUser(): any {
    const user: any = JSON.parse(
      localStorage.getItem(AppConstants.AWS.USER_PROFILE) ?? '{}'
    );

    if (user) {
      this.SendUserInfoData(user);
    }
    return user;
  }
  public getUser(): any {
    const userProfile = localStorage.getItem(AppConstants.AWS.USER_PROFILE);
    if (userProfile) {
      return JSON.parse(userProfile);
    } else {
      this.refreshToken();
    }
  }

  refreshToken() {
    const isAWSCode = localStorage.getItem(AppConstants.AWS.CODE);
    if (isAWSCode == null) {
      localStorage.clear();
      window.open(environment.awsAuthorizeURL, '_self');
    }
  }
}
