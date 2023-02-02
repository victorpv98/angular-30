import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  loginForm:FormGroup;
  alert: string = '';

  constructor(private formbuilder: FormBuilder,private authen: AuthenticationService, private router:Router){
    this.loginForm = this.formbuilder.group({
    name: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    email: ['', { validators: [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]  } ],
    webside: ['', [Validators.required]],
    rememberMe: [false]
    });
    }

    get name(){ return this.loginForm.get('name'); }
    get apellido(){ return this.loginForm.get('apellido'); }
    get email(){ return this.loginForm.get('email'); }
    get webside(){ return this.loginForm.get('webside'); }

    onSubmit() {
      if (this.loginForm.valid) {
        alert('Registro exitoso');
      } else {
        alert('Por favor complete todos los campos requeridos antes de enviar el formulario.');
      }
    }
}
