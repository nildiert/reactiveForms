import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: FormGroup;

  constructor(private fb: FormBuilder) {}

ngOnInit() {
  this.user = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    password: ['', Validators.required],
    passwordRepeat: ['', Validators.required]
  });
}

onSubmit() {
  console.log(this.user);
}


}



