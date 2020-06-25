import { Component, OnInit } from '@angular/core';
import { MockConsumeService } from 'src/app/Services/mock-consume.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss']
})
export class ProveedorComponent implements OnInit {

  dataService: any[] = [];

  constructor( private mockService: MockConsumeService ) { }

  ngOnInit() {
    this.mockService.getDataDummy()
      .subscribe( (resp:any) => {
        this.dataService = resp;
        console.log('DATA: ', resp);
        
      });
  }

}
