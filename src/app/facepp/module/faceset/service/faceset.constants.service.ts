import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
  private baseUrl = 'https://api-us.faceplusplus.com/facepp/v3/faceset/';
  private createApi = 'create/';
  private addFaceApi = 'addface/';
  private removeFaceApi = 'removeface/';
  private updateApi = 'update/';
  private detailApi = 'getdetail/';
  private deleteApi = 'delete/';
  private faceSetsApi = 'getfacesets/';

  public getCreateApi() {
    return this.baseUrl + this.createApi;
  }
  public getAddFaceApi() {
    return this.baseUrl + this.addFaceApi;
  }
  public getRemoveFaceApi() {
    return this.baseUrl + this.removeFaceApi;
  }
  public getUpdateApi() {
    return this.baseUrl + this.updateApi;
  }
  public getDetailApi() {
    return this.baseUrl + this.detailApi;
  }
  public getDeleteApi() {
    return this.baseUrl + this.deleteApi;
  }
  public getFaceSetsApi() {
    return this.baseUrl + this.faceSetsApi;
  }
}
