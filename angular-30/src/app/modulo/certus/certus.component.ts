import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-certus',
  templateUrl: './certus.component.html',
  styleUrls: ['./certus.component.css']
})
export class CertusComponent {
  constructor(public autenticacion: AuthenticationService ){}

  userLogin=false;

  ngOnInit(){
    this.userLogin = this.autenticacion.isLoggedIn('');
    this.autenticacion.changeLoginStatus$.subscribe(
      (estado: boolean) => this.userLogin = estado
    );
  }

  logout(){
    this.autenticacion.logout();
  }
}
