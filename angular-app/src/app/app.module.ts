import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import {KeycloakSecurityService} from "./services/keycloak-security.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RequestInterceptorService} from "./services/request-interceptor.service";

// initialisation de la service keycloakSecurity avant la demarrage de l'appli
export function keycloakFactory(keycloakFactory:KeycloakSecurityService) {
  return ()=> keycloakFactory.init();
}

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SuppliersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide:APP_INITIALIZER, deps:[KeycloakSecurityService], useFactory:keycloakFactory, multi:true},// initialisation de keycloakSecurity
    {provide:HTTP_INTERCEPTORS,useClass:RequestInterceptorService,multi:true} // intercepte toutes les requettes emisent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
