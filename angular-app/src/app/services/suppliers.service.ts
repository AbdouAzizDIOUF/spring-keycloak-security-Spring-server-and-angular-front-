import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {KeycloakSecurityService} from "./keycloak-security.service";

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor(private http:HttpClient) { }
  /*constructor(private http:HttpClient, private securityService:KeycloakSecurityService) { }*/

  public getSuppliers(){
    return this.http.get("http://localhost:8051/suppliers");
  }
  /*public getSuppliers(){
    return this.http.get("http://localhost:8051/suppliers"
        /!*{headers:new HttpHeaders({Authorization:'Bearer '+this.securityService.kc.token})}*!/);
  }*/

}
