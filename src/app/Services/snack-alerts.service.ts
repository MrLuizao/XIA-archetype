import { Injectable } from '@angular/core';
import { ErrorResponseComponent } from '../snack-alerts/error-response/error-response.component';
import { MatSnackBar } from '@angular/material';
import { InvalidSelectComponent } from '../snack-alerts/invalid-select/invalid-select.component';

@Injectable({
  providedIn: 'root'
})
export class SnackAlertsService {

  constructor( private _snackBar: MatSnackBar ) { }

  public errorSnack() {
    
    this._snackBar.openFromComponent(ErrorResponseComponent, {
      duration: 2000,
    });
  }

  public invalidSnack() {
    
    this._snackBar.openFromComponent(InvalidSelectComponent, {
      duration: 2000,
    });
  }

}
 