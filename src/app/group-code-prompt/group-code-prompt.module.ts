import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupCodePromptRoutingModule } from './group-code-prompt-routing.module';
import { GroupCodePromptComponent } from './component/group-code-prompt.component';
import { GroupCodeService } from './services/group-code.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [GroupCodePromptComponent],
  imports: [
    CommonModule,
    GroupCodePromptRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GroupCodeService],
})
export class GroupCodePromptModule { }
