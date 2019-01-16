import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public formValidate: boolean = false;
  public listValidate: boolean = false;
  public listInfo: string = '';
  public alert: boolean = false;
  public user: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.user = this.fb.group({
      name : '',
      lastname : '',
      identification : '',
      telephone : ''

    });
  }



  reactiveForm = '';
  onSubmit(value: any): void {
    if (value.name !== '' && value.lastname !== '' && value.identification !== '' && (value.telephone !== '' && value.telephone !== null)) {
      this.reactiveForm = JSON.stringify(value);
      this.formValidate = true;
      this.listValidate = true;
      this.alert = false;
    } else {
      this.alert = true;
    }
  }

  cleanReactiveForm() {

    this.user.controls['name'].setValue('');
    this.user.controls['lastname'].setValue('');
    this.user.controls['identification'].setValue('');
    this.user.controls['telephone'].setValue('');
    this.formValidate = false;
    this.listValidate = false;


    this.alert = false;
  }


}
