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

  showSuccessLogin() {
    this.toastr.success('acceso correcto', 'Bienvenido',{
      timeOut: 2500
    });
  }

  showErrorGeneric() {
    this.toastr.error('Hubo un error al iniciar sesión','intemta nuevamente',{
      timeOut: 3000
    });
  }

  showErrorPassword(){
    this.toastr.error('verifica la información capturada','Contraseña incorrecta',{
      timeOut: 3000
    });
  }

  showErrorEmail(){
    this.toastr.error('verifica los datos ingresados','Email no encontrado',{
      timeOut: 3000
    });
  }
  
}
