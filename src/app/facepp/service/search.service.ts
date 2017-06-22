import { Injectable } from '@angular/core';
import { Configuration } from './facepp.constants.service';
import { Headers, RequestOptions, Jsonp, Http, Response } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Injectable()
export class SearchService {
  private configuration = new Configuration();
  private data;

  constructor(private http: Http) {

  }

  public getData(url, faceset) {
    return this.http.get('../../../assets/json/search.response.json')
      .map((res: Response) => res.json());
  }
}
