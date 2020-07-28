import { Component, OnInit, Inject } from '@angular/core';
import { WarehouseModel } from 'src/app/Models/warehouse.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { ConsumeService } from 'src/app/Services/consume.service';
import { SnackAlertsService } from 'src/app/Services/snack-alerts.service';


@Component({
  selector: 'app-edit-warehouse',
  templateUrl: './edit-warehouse.component.html',
  styleUrls: ['./edit-warehouse.component.scss']
})
export class EditWarehouseComponent implements OnInit {

  loadSpinner= false;
  wareHouse:WarehouseModel;
  inputData: any;

  constructor( private httpservice: ConsumeService, 
               public snackService: SnackAlertsService,
               public dialogRef: MatDialogRef<EditWarehouseComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any) {

                this.inputData = data;
                }

  ngOnInit() {
    this.wareHouse = new WarehouseModel();
    console.log('llega con el injector al edit dialog', this.inputData);
    this.wareHouse.code = this.inputData.phone;
    this.wareHouse.description = this.inputData.name;
    this.wareHouse.type = this.inputData.website;
    this.wareHouse.location = this.inputData.username;
  }

  submitEditWarehose( form: NgForm ){
    

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
      this.snackService.correctSnack();    
    });


  }

}
