import { Component } from '@angular/core';
import { GroupCodeService } from '../services/group-code.service';

@Component({
  selector: 'app-group-code-prompt',
  templateUrl: './group-code-prompt.component.html',
  styleUrl: './group-code-prompt.component.css'
})
export class GroupCodePromptComponent {
  groupCode: string = '';
  errorMessage: string = '';
  constructor(private groupCodeService: GroupCodeService) { }

  onSubmit() {
    this.groupCodeService.assignGroupToUser(this.groupCode).subscribe({
      next: (x) => {
        window.location.reload();
      },
      error: (err) => {
        console.log(err.status)
        if (err.status === 400) {
          this.errorMessage = 'Invalid group code'
        }
      }
    });
  }
}
