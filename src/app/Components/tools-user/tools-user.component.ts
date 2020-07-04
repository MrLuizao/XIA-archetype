import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmCloseComponent } from 'src/app/dialogs/confirm-close/confirm-close.component';

@Component({
  selector: 'app-tools-user',
  templateUrl: './tools-user.component.html',
  styleUrls: ['./tools-user.component.scss']
})
export class ToolsUserComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  dialogConfirmClose(){
    const dialogRef = this.dialog.open(ConfirmCloseComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }


  closeSession(){
  }

}
