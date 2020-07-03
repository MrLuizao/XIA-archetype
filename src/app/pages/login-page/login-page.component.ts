import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { UserModel } from 'src/app/Models/user.model';
import { ToastAlertsService } from 'src/app/Services/toast-alerts.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{

  user: UserModel;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor( private alertToastService: ToastAlertsService) { }
  ngOnInit(){

    this.user = new UserModel();

    this.user.email = ''
    this.user.password = ''

  }

  submitLogin( form: NgForm ){

    if( form.invalid ){
      this.alertToastService.showSuccess();
      return;
    }
    console.log('datos capturados en el formulario de login', this.user);

    console.log(form);

    
  }



}
