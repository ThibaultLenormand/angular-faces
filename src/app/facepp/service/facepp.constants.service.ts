import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public const baseUrl: string = 'https://api-us.faceplusplus.com/facepp/v3/';
    public const detectApi: string = 'detect/';
    public const fullUrl = this.baseUrl + this.detectApi;
}