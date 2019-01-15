import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListComponent } from './formulario/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
