import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  //#region Constructor
  public constructor() { }
  //#endregion

  //#region Public Methods
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers: any = {
      'Content-Type': 'application/json; charset=utf-8'
    };

    // if (this.authenticationService.token !== null && this.authenticationService.token !== undefined) {
    //   headers['Authorization'] = this.authenticationService.token;
    // }

    req = req.clone({
      setHeaders: headers
    });

    return next.handle(req);
  }
  //#endregion
}
