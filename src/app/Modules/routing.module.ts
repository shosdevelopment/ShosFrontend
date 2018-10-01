//#region Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//#endregion

//#region Components
import { AppComponent } from '../app.component';
import { LoginComponent } from '../Pages/Authentication/login/login.component';
import { PageNotFoundComponent } from '../Pages/General/page-not-found/page-not-found.component';
//#endregion

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class RoutingModule { }
