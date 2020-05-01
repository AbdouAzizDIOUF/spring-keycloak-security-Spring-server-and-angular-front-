import { Injectable } from '@angular/core';
import {KeycloakInstance} from 'keycloak-js';
import {any} from "codelyzer/util/function";
import * as Keycloak from "keycloak-js";

declare var keycloak:any;

@Injectable({providedIn: 'root'})

export class KeycloakSecurityService {

  public kc:KeycloakInstance;

  constructor() { }

  async init(){
    console.log("Je suis initialise");
    // @ts-ignore
    this.kc=new Keycloak({
      url:"http://localhost:8080/auth",
      realm:"ecom-realm",
      clientId:"AngularProductsApp"
    });
    await this.kc.init({
      //onLoad: "login-required"
      onLoad: "check-sso", // verifie si l'utilisateur est deja authentifie "verifie les cookies"
    });
    console.log(this.kc.token);
  }
}
