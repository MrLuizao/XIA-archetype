import { Component, OnInit } from '@angular/core';
import { WarehouseModel } from 'src/app/Models/warehouse.model';
import { FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-warehouse',
  templateUrl: './create-warehouse.component.html',
  styleUrls: ['./create-warehouse.component.scss']
})
export class CreateWarehouseComponent implements OnInit {

  wareHouse:WarehouseModel;


  constructor() { }

  ngOnInit() {
    this.wareHouse = new WarehouseModel();
    console.log('Modelo en el dialog', this.wareHouse)
    this.wareHouse.code = '';
    this.wareHouse.description = '';
    this.wareHouse.type = '';
    this.wareHouse.location = '';

  }

  submitSaveWarehose( form: NgForm ){

    if( form.invalid ){
      return;
    }
    console.log('datos capturados en warehouse form', this.wareHouse);
    console.log(form);

  }

}
