import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { UserDetailsService } from 'angular-shared-lib';
import { headerComponentUrl } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  group: string | undefined
  userLoggedIn: boolean = false
  @ViewChild('header', { read: ViewContainerRef }) viewContainer!: ViewContainerRef;

  constructor(
    private userDetailsService: UserDetailsService,
    private router: Router
  ) {

  }

  async ngOnInit(): Promise<void> {
    this.loadRemote()
    this.userLoggedIn = this.userDetailsService.isLoggedIn()
    this.group = await this.userDetailsService.getUserGroup()
    if (this.group)
      this.router.navigate(['home'])
    else if (this.userDetailsService.isLoggedIn())
      this.router.navigate(['groupCodePrompt'])
  }

  async loadRemote(): Promise<void> {
    const m = await loadRemoteModule({
      remoteName: 'predictorHeader',
      remoteEntry: headerComponentUrl,
      exposedModule: 'HeaderComponent'
    });
    const componentRef = this.viewContainer.createComponent(m.HeaderComponent);
  }
}
