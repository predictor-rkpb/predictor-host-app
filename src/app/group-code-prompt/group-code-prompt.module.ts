import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupCodePromptRoutingModule } from './group-code-prompt-routing.module';
import { GroupCodePromptComponent } from './component/group-code-prompt.component';


@NgModule({
  declarations: [GroupCodePromptComponent],
  imports: [
    CommonModule,
    GroupCodePromptRoutingModule
  ]
})
export class GroupCodePromptModule { }
