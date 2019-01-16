import { UserSharedService } from "./../../services/shared/user-shared.service";
import { User } from "./../../user";
import { Component, OnInit, Input, Output } from "@angular/core";
import { EventEmitter } from "events";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  public showList: boolean = false;
  // tslint:disable-next-line:no-input-rename
  @Input() listchild: any;
  list = null;
  listUser: User[] = [];

  event = null;

  constructor(private userShared: UserSharedService) {

  }

  ngOnInit() {
    this.listchild.subscribe((data: any) => {
      this.listUser = data;
    });
  }



  sendToModal(object: User) {
    this.userShared.setUserAlert(object);
  }
}
