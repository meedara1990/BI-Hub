/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}
  getAuthToken(authCode: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const options = { headers: headers };

    const body = new URLSearchParams();
    body.set('client_id', environment.client_id);
    body.set('grant_type', 'authorization_code');
    body.set('redirect_uri', environment.redirect_uri);
    body.set('code', authCode);

    return this.http.post(environment.awsTokenUrl, body.toString(), options);
  }

  getUserInfo(accessToken: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + accessToken
    });
    const options = { headers: headers };

    const body = new URLSearchParams();
    body.set('Authorization', 'Bearer ' + accessToken);

    return this.http.post(environment.awsUserInfoUrl, body.toString(), options);
  }
}
