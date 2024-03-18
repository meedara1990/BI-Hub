import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) {}
  checkAccess(url: string): Observable<any> {
    const requestParam: viewCheckParams = {
      method: 'getViewByPath',
      params: {
        path: this.sliptURL(url)
      }
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*'
    });
    const options = { headers: headers };
    return this.http.post(
      'https://tableau-prod.nmgcloud.io/vizportal/api/web/v1/getViewByPath',
      requestParam,
      options
    );
    // .subscribe(
    //   (response) => {
    //     console.log('checkAccess Response', response);
    //   },
    //   (error) => {
    //     console.log('error from checkAccess: ' + error);
    //   }
    // );
  }

  sliptURL(url: string) {
    return url.split('views')[1].split('?')[0];
  }
}

export interface viewCheckParams {
  method: string;
  params: Params;
}

export interface Params {
  path: string;
}
