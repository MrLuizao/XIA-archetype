import { Component, OnInit, Input} from '@angular/core';
import { ConsumeService } from 'src/app/Services/consume.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss']
})
export class ProveedorComponent implements OnInit {

  constructor( private service: ConsumeService ) { }
 
  ngOnInit() {

  }

}
