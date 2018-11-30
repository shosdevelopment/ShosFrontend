import { ItemModel } from 'src/app/Models/item.model';
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
  public search(): Observable<ItemModel[]> {

    return Observable.create(e => {
      const itemList: ItemModel[] = [];

      itemList.push({ ID: 1, Name: 'Bottle', Price: 12, Description: 'First navigation' });
      itemList.push({ ID: 2, Name: 'Table', Price: 540, Description: 'LOckhart' });
      itemList.push({ ID: 3, Name: 'Piano', Price: 1300, Description: 'Dance' });
      itemList.push({ ID: 4, Name: 'Bottle', Price: 12, Description: 'First' });
      itemList.push({ ID: 5, Name: 'Table', Price: 540, Description: 'First' });
      itemList.push({ ID: 6, Name: 'Piano', Price: 1300, Description: 'First' });
      itemList.push({ ID: 7, Name: 'Bottle', Price: 12, Description: 'First' });
      itemList.push({ ID: 8, Name: 'Table', Price: 540, Description: 'First' });
      itemList.push({ ID: 9, Name: 'Piano', Price: 1300, Description: 'First' });

      e.next(itemList);
      e.complete();
    });
    // return this.apiService.httpGet('search');
  }
  //#endregion
}
