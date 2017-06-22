import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
  private APIKey = 'XGXfnP5U681ek5SAVKqoYZq6dJPKoDAj';
  private APISecret = 'YaV_jwW190GfE2fjBqKSFFprpEtDslhA';

  private baseUrl = 'https://api-us.faceplusplus.com/facepp/v3/';
  private detectApi = 'detect/';
  private compareApi = 'compare/';
  private searchApi = 'search/';

  public getAPIKey() {
    return this.APIKey;
  }
  public getAPISecret() {
    return this.APISecret;
  }

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
