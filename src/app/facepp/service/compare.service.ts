import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class CompareService {

    constructor(private http: Http){

    }

    public getData(url){
        return this.http.get('../../../assets/json/compare.response.json')
            .map((res:Response) => res.json());
    }
}
