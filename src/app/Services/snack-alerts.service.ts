import { Injectable } from '@angular/core';
import { ErrorResponseComponent } from '../snack-alerts/error-response/error-response.component';
import { MatSnackBar } from '@angular/material';
import { InvalidSelectComponent } from '../snack-alerts/invalid-select/invalid-select.component';
import { CorrectResponseComponent } from '../snack-alerts/correct-response/correct-response.component';

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

  public correctSnack() {
    
    this._snackBar.openFromComponent(CorrectResponseComponent, {
      duration: 2000,
    });
  }

}
 