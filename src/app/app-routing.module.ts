import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(x => x.HomeModule),
    canActivate: [() => inject(AuthGuard).canActivate()]
  },
  {
    path: 'groupCodePrompt',
    loadChildren: () => import('./group-code-prompt/group-code-prompt.module').then(x => x.GroupCodePromptModule),
    canActivate: [() => inject(AuthGuard).canActivate()]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
