import { Injectable } from '@angular/core';
import { Configuration } from './facepp.constants.service';
import { Headers, RequestOptions, Jsonp, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DetectService {
    private configuration = new Configuration();
    constructor(private http: Http){
        
    }
    
    public detect(url: string): Observable<Jsonp> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        
        let route = this.configuration.getDetectApi();
    console.log(route);
        let request = {
            'api_key': this.configuration.getAPIKey(),
            'api_secret': this.configuration.getAPISecret(),
            'image_url': url,
            'return_attributes': 'gender,age,smiling,headpose,facequality,blur,eyestatus,ethnicity'
        };
        let options = new RequestOptions({ headers: headers });
        
        return this.http.post(route, request)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }
    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
