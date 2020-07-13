import { Component, OnInit, ViewChild } from '@angular/core';
import { DirectoryModel } from 'src/app/Models/directory.model';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ConsumeService } from 'src/app/Services/consume.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/src/sweetalert2.js'
import { MockConsumeService } from 'src/app/Services/mock-consume.service';


@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})
export class TableUsersComponent implements OnInit {

  registryEdit: DirectoryModel = new DirectoryModel; 

  displayedColumns: any[] = ['name', 'email', 'phone', 'department', 'position', 'actions']
  dataSource = new MatTableDataSource()
  progressBar = true;

  constructor(  private service: ConsumeService, 
                private mockService: MockConsumeService,
                private router: Router ) { }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  @ViewChild (MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit() {

    this.directoryList();
    this.registryEdit = new DirectoryModel();
    this.dataSource.paginator = this.paginator;
    
  }


  createRegistry( ){
    // this.router.navigate(['form-new']);
    alert('crear funcion')
  }

  onEdit(id){
    alert('crear funcion')

  // this.router.navigate(['form-edit'], {
  //    queryParams: {
  //       id: id
  //    }
  // });
  } 

  directoryList(){
    this.progressBar = true;
    //  this.service.getListDirectory().subscribe( (resp:any) =>{
    this.mockService.getDataUsers().subscribe( (resp:any) =>{
      //  this.dataSource.data = resp.data;
      this.dataSource = resp;
       console.log('DATA:', resp);
       
       this.progressBar = false;
    })
 }

//  onDelete(id: number){
//   Swal.fire({
//      title: 'Confirmar borrado',
//      text: "¿Estás seguro de eliminar el registro?",
//      icon: 'warning',
//      showCancelButton: true,
//    //   confirmButtonColor: '#963CBD',
//    //   cancelButtonColor: '#ff08a1',
//      confirmButtonText: 'Si'
//   })
//   .then((result) => {
//      if (result.value) {
//         this.service.deleteRegistryFromDirectory(id).subscribe(resp => {
//            if (resp['response']){
//               Swal.fire({
//                  icon: 'success',
//                  text: 'Se ha eliminado el registro.',
//                  timer: 2000,
//                  showConfirmButton: false,
//               });
//               this.directoryList();
//            }
//            else{
//               Swal.fire({
//                  icon: 'error',
//                  text: 'No se pudo eliminar el registro, intente de nuevo.',
//                  timer: 2000,
//                  showConfirmButton: false,
//               }); 
//            }
//         }, (err) => {
//            Swal.fire({
//               icon: 'error',
//               text: 'No fue posible eliminar el registro.',
//               title: 'Error del servidor',
//               timer: 2000,
//               showConfirmButton: false,
//            });
//         });
//      }
//   });
// }

}
