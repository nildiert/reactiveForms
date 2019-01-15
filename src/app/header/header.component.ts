import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() header = new EventEmitter();
  evento = null;

  cargarEnMain(mensaje) {
    this.evento = mensaje;
    this.header.emit(this.evento);
  }
  constructor() { }

  ngOnInit() {
  }

}
