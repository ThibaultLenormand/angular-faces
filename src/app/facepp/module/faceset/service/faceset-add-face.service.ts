import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class FacesetAddFaceService {

    constructor(private http: Http){

    }

    public getData(url){
        return this.http.get('../../../assets/json/faceset-add-face.response.json')
            .map((res:Response) => res.json());
    }

}
