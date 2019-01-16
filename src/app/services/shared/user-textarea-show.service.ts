import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class UserTextareaShowService {

  textArea: Subject<any> = new Subject<any>();
  constructor() { }


  getUserTextAreaShow() {
    return this.textArea;
  }

  setUserTexAreaShow(textArea: any) {
    this.textArea.next(textArea);
  }
}
