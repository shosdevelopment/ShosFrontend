//#region Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './Services/auth-interceptor.service';
//#endregion

//#region Pages
import { AppComponent } from './app.component';
import { SearchComponent } from './Pages/General/search/search.component';
import { LoginComponent } from './Pages/Authentication/login/login.component';
import { PageNotFoundComponent } from './Pages/General/page-not-found/page-not-found.component';
//#endregion

//#region Modules
import { RouteModule } from './Modules/route.module';
//#endregion

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    PageNotFoundComponent,
  ],
  imports: [
    RouteModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
