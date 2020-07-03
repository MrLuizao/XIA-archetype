import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ToastAlertsService {

  constructor( private toastr: ToastrService  ) { }


  showSuccess() {
    this.toastr.success('TEST', 'LKY',{
      timeOut: 2300
    });
  }

  showError() {
    this.toastr.error('Hubo un error al iniciar sesión','intemta nuevamente',{
      timeOut: 3000
    });
  }
  
}
