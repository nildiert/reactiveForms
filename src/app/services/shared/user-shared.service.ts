import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { User } from '../../user';

@Injectable()
export class UserSharedService {
  alert: Subject<any> = new Subject<any>();
  constructor() { }

  getUserAlert() {
    return this.alert;
  }
  setUserAlert(alert: any) {
    this.alert.next(alert);
  }

}
