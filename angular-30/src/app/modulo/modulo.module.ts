import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertusComponent } from './certus/certus.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';



@NgModule({
  declarations: [
    CertusComponent,
    LoginComponent,
    FormularioComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],exports: [
    CertusComponent,
    LoginComponent,
    FormularioComponent,
    FormsModule
  ]

})
export class ModuloModule { }
