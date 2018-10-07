import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpResponseModel } from '../Models/http-response.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //#region Members
  /**
  * The end point that the service will work with.
  */
  private url: string;
  //#endregion

  //#region Constructor
  public constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
  }
  //#endregion

  //#region Public Methods
  public httpGet<T>(path: string): any {
    return this.http.get<T>(this.url + path)
      .pipe(map((response) => this.inspectResponse(<any>response)));
  }

  public httpPost<T>(path: string, data: any): any {
    return this.http.post<T>(this.url + path, data)
      .pipe(map((response) => this.inspectResponse(<any>response)));
  }
  //#endregion

  //#region Private Methods
  private inspectResponse(response: HttpResponseModel): any {
    // Construct proper response interceptor.
    if (response === null || response === undefined) {
      return null;
    }

    return response.Data;
  }
  //#endregion
}
