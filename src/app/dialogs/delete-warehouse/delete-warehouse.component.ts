import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-delete-warehouse',
  templateUrl: './delete-warehouse.component.html',
  styleUrls: ['./delete-warehouse.component.scss']
})

export class DeleteWarehouseComponent implements OnInit {
  
  // @ViewChild('sharedWarehouse', {static: false}) sharedWarehouse: any;
  @Input() tableSelect: any;
  
  
  constructor() { }

  ngOnInit() {
    console.log(this.tableSelect);
    // console.log('llega con el input al dilog', this.sharedWarehouse);
    
  }

}
