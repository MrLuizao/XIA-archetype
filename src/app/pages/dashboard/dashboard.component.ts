import { Component, OnInit } from '@angular/core';
import { MockConsumeService } from 'src/app/Services/mock-consume.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from 'src/app/dialogs/login-modal/login-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataService: any[] = [];

  constructor( private mockService: MockConsumeService,
               public dialog: MatDialog) {}

  //  openDialog() {
  //   this.dialog.open(LoginModalComponent);
  // }

  ngOnInit() {
    this.mockService.getDataDummy()
      .subscribe( (resp:any) => {
        this.dataService = resp;
        console.log('DATA: ', resp);
        
      });
  }

}
