import {Component, OnInit} from '@angular/core';
import {KeycloakSecurityService} from "./services/keycloak-security.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-app';

  constructor(private keyloakSecurityService:KeycloakSecurityService) {
  }

  ngOnInit(): void {

  }

  onLogin() {
    this.keyloakSecurityService.kc.login();
  }

  onLogout() {
    this.keyloakSecurityService.kc.logout();
  }

  onChangePassword() {
    this.keyloakSecurityService.kc.accountManagement();
  }

  isAuthenticated(): boolean{
    return this.keyloakSecurityService.kc.authenticated;
  }

  isAppManager(): boolean {
    return this.keyloakSecurityService.kc.hasRealmRole("app-manager");
  }

  userDetail(value:string){
    return this.keyloakSecurityService.kc.tokenParsed[value];
  }
}
