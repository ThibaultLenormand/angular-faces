import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
  private baseUrl = 'https://api-us.faceplusplus.com/facepp/v3/face/';
  private analyzeApi = 'analyze/';
  private detailApi = 'getdetail/';
  private setUserIDApi = 'setuserid/';

  public getAnalyzeApi() {
    return this.baseUrl + this.analyzeApi;
  }
  public getDetailApi() {
    return this.baseUrl + this.detailApi;
  }
  public getSetUserIDApi() {
    return this.baseUrl + this.setUserIDApi;
  }
}
