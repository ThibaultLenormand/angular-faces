import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
  private baseUrl = 'https://api-us.faceplusplus.com/facepp/v3/';
  private detectApi = 'detect/';
  private compareApi = 'compare/';
  private searchApi = 'search/';

  public getDetectApi() {
    return this.baseUrl + this.detectApi;
  }
  public getCompareApi() {
    return this.baseUrl + this.compareApi;
  }
  public getSerchApi() {
    return this.baseUrl + this.searchApi;
  }
}
