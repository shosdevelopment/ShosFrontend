import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
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

    let dialog: DialogModel = null;

    switch (response.ErrorType) {
      case ErrorEnum.Unauthorized:
        dialog = new DialogModel();
        dialog.Title = 'User is not authenticated';
        dialog.Body = 'You\'re not allowed to perform the action you\'ve tried to do.';
        break;

      case ErrorEnum.ArgumentsNotValid:
        dialog = new DialogModel();
        dialog.Title = 'Bad arguments';
        dialog.Body = 'Some of the arguments are not valid.';
        break;

      case ErrorEnum.InternalServerError:
        dialog = new DialogModel();
        dialog.Title = 'Internal Server Error';
        dialog.Body = 'Something went wrong, please try again later.';
        break;
    }

    if (dialog !== null && dialog !== undefined) {
      setTimeout(() => {
        this.dialogService.closeDialog();
        this.dialogService.openInformationDialog(dialog);
      }, 200);
    }

    return response.Data;
  }
  //#endregion
}
