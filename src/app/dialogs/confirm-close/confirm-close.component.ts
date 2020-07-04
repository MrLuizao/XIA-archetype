import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-close',
  templateUrl: './confirm-close.component.html',
  styleUrls: ['./confirm-close.component.scss']
})
export class ConfirmCloseComponent {

  constructor(  private router:Router,
                public dialogRef: MatDialogRef<ConfirmCloseComponent>) { }


  closeSession(){
    this.router.navigate(['login']);
  }

}
