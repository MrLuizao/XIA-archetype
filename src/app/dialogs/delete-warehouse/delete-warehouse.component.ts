import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-warehouse',
  templateUrl: './delete-warehouse.component.html',
  styleUrls: ['./delete-warehouse.component.scss']
})

export class DeleteWarehouseComponent implements OnInit {
  
  // @ViewChild('sharedWarehouse', {static: false}) sharedWarehouse: any;
  // @Input() tableSelect: any;
  recivedData: any;
  
  constructor( @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.recivedData = data;
  }

  ngOnInit() {
    console.log('esto llega con el injector', this.recivedData);
    
  }

}
