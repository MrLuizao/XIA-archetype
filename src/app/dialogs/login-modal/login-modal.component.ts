import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {
  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  constructor( public dialogRef: MatDialogRef<LoginModalComponent>) {}
    
  onNoClick(): void {
    this.dialogRef.close();
  }

  onLogin(){
    
  }

}
