import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class AlertService {

  constructor(private http: HttpClient) {
  }

  getAlertsByVin(vin): Observable<any[]> {
    return this.http.get(`http://localhost:8080/api/alerts/${vin}`)
      .catch(error => Observable.throw(error.statusText));
  }

  getAllHighAlerts(): Observable<any[]> {
    return this.http.get(`http://localhost:8080/api/alerts`)
      .catch(error => Observable.throw(error.statusText));
  }
}
