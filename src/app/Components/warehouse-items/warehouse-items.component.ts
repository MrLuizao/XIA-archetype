import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { MockConsumeService } from 'src/app/Services/mock-consume.service';
import { CreateWarehouseComponent } from 'src/app/dialogs/create-warehouse/create-warehouse.component';
import { EditWarehouseComponent } from 'src/app/dialogs/edit-warehouse/edit-warehouse.component';
import { DeleteWarehouseComponent } from 'src/app/dialogs/delete-warehouse/delete-warehouse.component';
import { SnackAlertsService } from 'src/app/Services/snack-alerts.service';

@Component({
  selector: 'app-warehouse-items',
  templateUrl: './warehouse-items.component.html',
  styleUrls: ['./warehouse-items.component.scss']
})
export class WarehouseItemsComponent implements OnInit {

  @Output() sendData= new EventEmitter<any>();
  
  tableSelect: any[] = [];

  loadSpinner: boolean;
  filterList = '';
  listMenu: any[] = [];

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
  constructor( private mockService: MockConsumeService, 
               public dialog: MatDialog, 
               public snackService: SnackAlertsService) { }

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

  createWarehouse(){

    const dialogRef = this.dialog.open(CreateWarehouseComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

    })
  }

  deleteWarehouse(){

    if (this.tableSelect.length == 0){
      this.snackService.invalidSnack();
      return
    }

    this.sendData.emit(this.tableSelect)
    console.log('esto se manda con el emitter', this.tableSelect);


    const dialogRef = this.dialog.open(DeleteWarehouseComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

  editWarehouse(){
    const dialogRef = this.dialog.open(EditWarehouseComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }


}
