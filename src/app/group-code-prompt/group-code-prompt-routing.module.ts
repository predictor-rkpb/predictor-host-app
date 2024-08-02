import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupCodePromptComponent } from './component/group-code-prompt.component';

const routes: Routes = [
  {
    path: '',
    component: GroupCodePromptComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupCodePromptRoutingModule { }
