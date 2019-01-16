import { ModalComponent } from './modal/modal.component';
import { UserSharedService } from './services/shared/user-shared.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListComponent } from './formulario/list/list.component';
import { UserTextareaShowService } from './services/shared/user-textarea-show.service';




@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListComponent,
    ModalComponent


  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [UserSharedService, UserTextareaShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
