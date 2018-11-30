import { Router } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { ItemModel } from 'src/app/Models/item.model';
import { CoreService } from 'src/app/Pages/Core/core.service';
import { BasePageAbstract } from 'src/app/Abstracts/base-page.abstract';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent extends BasePageAbstract implements OnDestroy {
  //#region Members
  public searchTextBox: string;
  public items: ItemModel[];
  //#endregion

  //#region Constructor
  public constructor(
    protected router: Router,
    private coreService: CoreService) {
    super(router);
    console.group('SearchComponent');
  }

  public ngOnDestroy(): void {
    console.groupEnd();
  }
  //#endregion

  //#region Public Methods
  public search(): void {
    console.log('search(' + this.searchTextBox + ')');

    if (this.isStringNullOrEmpty(this.searchTextBox)) {
      console.error('Search text box is empty, aborting.');
      return;
    }

    this.coreService.search()
      .subscribe(
        (success: ItemModel[]) => {
          this.items = success;
          setTimeout(() => {
            window.scroll({ top: 500, left: 0, behavior: 'smooth' });
          }, 500);

        },
        (error) => {
          console.error(error);
        }
      );
  }
  //#endregion
}
