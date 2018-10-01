import { Router } from '@angular/router';
import { PagesEnum } from '../Enums/pages.enum';

export class BasePageAbstract {
    //#region Members
    public pagesEnum: typeof PagesEnum = PagesEnum;
    //#endregion

    //#region Constructor
    public constructor(protected router: Router) { }
    //#endregion

    //#region Public Methods
    /**
    * Method that handles all navigation requests from all components.
    * @param page Page enum that contains all kind of pages.
    */
    public navigateToPage(page: PagesEnum): void {
        switch (page) {
            case PagesEnum.Home:
                this.router.navigateByUrl('/');
                break;
            case PagesEnum.Login:
                this.router.navigateByUrl('/login');
                break;

            default:
                this.router.navigateByUrl('/pagenotfound');
                break;
        }
    }

    /**
    * Validates whether given string is null or undefined or empty,
    * @param str Given string as argument.
    */
    public isStringNullOrEmpty(str: string): boolean {
        if (str === null || str === undefined || str === '') {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Validates whether given object is null or undefined.
     * @param object Given object as argument.
     */
    public isObjectNullOrUndefined(object: any): boolean {
        if (object === null || object === undefined) {
            return true;
        } else {
            return false;
        }
    }
    //#endregion
}
