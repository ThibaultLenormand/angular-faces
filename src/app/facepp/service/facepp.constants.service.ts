import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
  private APIKey: string  = 'XGXfnP5U681ek5SAVKqoYZq6dJPKoDAj';
  private APISecret: string  = 'YaV_jwW190GfE2fjBqKSFFprpEtDslhA';

  private baseUrl: string  = 'https://api-us.faceplusplus.com/facepp/v3/';
  private detectApi: string  = 'detect';
  private compareApi: string  = 'compare';
  private searchApi: string  = 'search';

  public getAPIKey(): string {
    return this.APIKey;
  }
  public getAPISecret(): string  {
    return this.APISecret;
  }

  public getDetectApi(): string  {
    return this.baseUrl + this.detectApi;
  }
  public getCompareApi(): string  {
    return this.baseUrl + this.compareApi;
  }
  public getSearchApi(): string  {
    return this.baseUrl + this.searchApi;
  }
}
