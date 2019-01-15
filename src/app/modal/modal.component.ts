import { UserSharedService } from './../services/shared/user-shared.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  public user: User = null;

  constructor(private userShared: UserSharedService) {
    this.userShared.getUserAlert().subscribe((data: User) => {
      this.user = data;

      document.getElementById('modal').click();
    });
   }

  ngOnInit() {
  }


}
