import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GroupCodeDTO } from "../../../../projects/shared-lib/index";

@Injectable()
export class GroupCodeService {

  constructor(private httpClient: HttpClient) { }

  assignGroupToUser(groupCode: string) {
    // a http post to assign the group
    const data: GroupCodeDTO = {
      code: groupCode
    }

    return this.httpClient.post('/api/master/user-mgmt/assignGroup', data);
  }
}
