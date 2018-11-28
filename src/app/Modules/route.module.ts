//#region Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//#endregion

//#region Components
import { SearchComponent } from '../Pages/Core/search/search.component';
import { PageNotFoundComponent } from '../Pages/Core/page-not-found/page-not-found.component';
//#endregion

const routes: Routes = [
  { path: '', component: SearchComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class RouteModule { }
