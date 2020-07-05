import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { UserModel } from 'src/app/Models/user.model';
import { ToastAlertsService } from 'src/app/Services/toast-alerts.service';
import { AuthFirebaseService } from 'src/app/Services/auth-firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{

  hide = true;
  user: UserModel;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Ingresa un formato de correo válido';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(  private alertToastService: ToastAlertsService,
                private router:Router,
                private authFire: AuthFirebaseService
              ) { }
  ngOnInit(){

    this.user = new UserModel();

    this.user.email = 'luis@xia.com'
    this.user.password = '12345abc'

  }

  submitLogin( form: NgForm ){

    if( form.invalid ){
      return;
    }
    console.log('datos capturados en el formulario de login', this.user);
    console.log(form);

    this.authFire.logInFireBase(this.user)
    .subscribe( response =>{

      console.log(response);
      this.router.navigate(['dashboard']);


    }, (errType) =>{

      let messageServ = errType.error.error.message;

      console.log(messageServ);

      if(messageServ == 'EMAIL_NOT_FOUND'){
        this.alertToastService.showErrorEmail();
        return;
      }

      if (messageServ == 'INVALID_PASSWORD'){
        this.alertToastService.showErrorPassword();
        return;
      }

    });

    
  }



}
