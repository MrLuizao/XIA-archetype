import { Component, OnInit } from '@angular/core';
import { MockConsumeService } from 'src/app/Services/mock-consume.service';

@Component({
  selector: 'app-card-menu-dashboard',
  templateUrl: './card-menu-dashboard.component.html',
  styleUrls: ['./card-menu-dashboard.component.scss']
})
export class CardMenuDashboardComponent implements OnInit {

  // menuItems: MenuModel[] = [];
  menuItems: any[] = [];

  constructor( private mockService: MockConsumeService ) { }

  ngOnInit() {

    this.mockService.getMenuOptions()
    .subscribe( (resp:any) => {
      // this.progressBar = false;
      this.menuItems = resp;
      console.log('DATA: ', resp);
      
    });
  }

}
