import { Injectable } from '@angular/core';
import { Configuration } from './face.constants.service';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FaceAnalyzeService {
  private configuration = new Configuration();
  private data;

  constructor(private http: Http) {

  }

  public getData(urls) {
    return this.http.get('../../../assets/json/face-analyze.response.json')
      .map((res: Response) => res.json());
  }

}
