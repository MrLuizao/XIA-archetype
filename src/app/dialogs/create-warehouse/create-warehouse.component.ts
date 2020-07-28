import { Component, OnInit } from '@angular/core';
import { WarehouseModel } from 'src/app/Models/warehouse.model';
import { NgForm } from '@angular/forms';
import { ConsumeService } from 'src/app/Services/consume.service';
import { MatDialogRef } from '@angular/material';
import { SnackAlertsService } from 'src/app/Services/snack-alerts.service';

@Component({
  selector: 'app-create-warehouse',
  templateUrl: './create-warehouse.component.html',
  styleUrls: ['./create-warehouse.component.scss']
})
export class CreateWarehouseComponent implements OnInit {

  loadSpinner= false;
  wareHouse:WarehouseModel;
  loadingClass = false;


  constructor( private httpservice: ConsumeService, 
    public dialogRef: MatDialogRef<CreateWarehouseComponent>, 
    public snackService: SnackAlertsService) { }

  ngOnInit() {
    this.wareHouse = new WarehouseModel();
    console.log('Modelo en el dialog', this.wareHouse)
    // this.wareHouse.code = '';
    // this.wareHouse.description = '';
    // this.wareHouse.type = '';
    // this.wareHouse.location = '';

  }


  submitSaveWarehose( form: NgForm ){

    if( form.invalid ){
      return;
    }
    
    this.loadSpinner = true;

    console.log(form);

    this.httpservice.postCreateWarehouse( this.wareHouse )
    .subscribe( resp => {

      if(resp['response'] === true ){

      }else{

        alert('Aqui devolver un snackbar')
      }
    }, (err) => {

      this.dialogRef.close(false);
      this.snackService.errorSnack();      
    });


  }
  

}
