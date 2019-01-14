import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  user: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.user = this.fb.group({
      'name' : [''],
      'lastname' : [''],
      'identification' : [''],
      'telephone' : ['']

    });
  }

  reactiveForm = '';
  onSubmit(value: string): void {
    this.reactiveForm = JSON.stringify(value);
    console.log(this.reactiveForm);
  }

}
