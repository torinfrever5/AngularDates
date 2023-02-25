import { Injectable } from '@angular/core';
import { DateClass } from './date-class';
import { ReviewClass } from './review-class';

import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatesService {
  hostUrl:string = 'http://localhost:8080/';
  url:string = 'http://localhost:8080/data/dates.json';
  url2:string = 'http://localhost:8080/data/reviews.json';

  constructor(private http: HttpClient) { }

  getDates() {
    return this.http.get<DateClass[]>(this.hostUrl + 'data/dates.json');
  }
  getReviews() {
    return this.http.get<ReviewClass[]>(this.hostUrl + 'data/reviews.json');
  }
}
