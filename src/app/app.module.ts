import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { keycloakConfig } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { UserMgmtModule, UserDetailsService } from "angular-shared-lib";

function initializeKeycloak(service: UserDetailsService) {
  return async () => {
    await service.init(keycloakConfig)
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserMgmtModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [UserDetailsService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
