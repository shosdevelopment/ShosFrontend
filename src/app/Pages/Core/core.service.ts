import { ApiService } from '../../Services/api.service';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  //#region Constructor
  public constructor(private apiService: ApiService) { }
  //#endregion

  //#region Public Methods
  public search(): Observable<any> {
    return this.apiService.httpGet('search');
  }
  //#endregion
}
