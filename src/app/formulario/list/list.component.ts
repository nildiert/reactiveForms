import { UserSharedService } from './../../services/shared/user-shared.service';
import { User } from './../../user';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public showList: boolean = false;
  @Input('listForm') listchild;
  list = null;
  listUser: User[] = [];

  event = null;

  constructor(private userShared: UserSharedService) {}

  ngOnInit() {}

  sendToList() {
    this.list = JSON.parse(this.listchild);
    this.listUser.push(this.list);
    console.log('Este es el arreglo que estamos guardando');
    console.log(this.listUser);
    console.log('Esta es la variable qu esta llegando');
    console.log(this.listchild);
    console.log('Esta es la variable qu estamos usando');
    console.log(this.list);
    this.showList = true;
  }

  sendToModal(object: User) {
    this.userShared.setUserAlert(object);
  }
}
