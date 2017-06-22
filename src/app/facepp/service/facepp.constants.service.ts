import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public readonly baseUrl: string = 'https://api-us.faceplusplus.com/facepp/v3/';
    public readonly detectApi: string = 'detect/';
    public readonly fullUrl = this.baseUrl + this.detectApi;
}