import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { MockConsumeService } from 'src/app/Services/mock-consume.service';

@Component({
  selector: 'app-warehouse-items',
  templateUrl: './warehouse-items.component.html',
  styleUrls: ['./warehouse-items.component.scss']
})
export class WarehouseItemsComponent implements OnInit {

  filterList = '';
  listMenu: any[] = [];
  id: any;
  tableSelect: any[] = [];

  displayedColumns: string[] = ['key', 'code', 'description', 'type', 'ubication'];
  dataSource = new MatTableDataSource<any>(this.tableSelect);
  selection = new SelectionModel<any>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  constructor( private mockService: MockConsumeService ) { }

  ngOnInit() {
    this.mockService.getDataUsers()
    .subscribe( (resp:any) => {
      // this.progressBar = false;
      this.listMenu = resp;
      console.log('listMenu Resp: ', this.listMenu);
      
    });
  }

  viewTableById(id){
    console.log('esto llega por parametros', id);
    console.log('valor de dataTable antes de recorrer al array', this.tableSelect);

    let allDataTable = this.listMenu;
    console.log({allDataTable});

    let filterTable =  allDataTable.filter(function(eachObj) {
      return eachObj.id == id;
    });

    this.tableSelect = filterTable[0]; //cuenso se pinta el dato en tabla quitar el INDEX [0]
    console.log('nuevo valor de la dataTable', this.tableSelect);

  }

}
