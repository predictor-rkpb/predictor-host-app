import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { UserDetailsService } from 'shared-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  group: string | undefined
  userLoggedIn: boolean = false

  constructor(
    private userDetailsService: UserDetailsService,
    private router: Router
  ) {

  }

  async ngOnInit(): Promise<void> {
    this.userLoggedIn = this.userDetailsService.isLoggedIn()
    this.group = await this.userDetailsService.getUserGroup()
    if (this.group)
      this.router.navigate(['home'])
    else if (this.userDetailsService.isLoggedIn())
      this.router.navigate(['groupCodePrompt'])
  }
}
