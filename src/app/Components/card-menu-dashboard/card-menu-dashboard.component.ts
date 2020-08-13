import { Component, OnInit } from '@angular/core';
import { MockConsumeService } from 'src/app/Services/mock-consume.service';
import { MenuModel } from 'src/app/Models/menu.model';

@Component({
  selector: 'app-card-menu-dashboard',
  templateUrl: './card-menu-dashboard.component.html',
  styleUrls: ['./card-menu-dashboard.component.scss']
})
export class CardMenuDashboardComponent implements OnInit {

  menuItems: MenuModel[] = [];
  filteredObject: any[] = [];

  constructor( private mockService: MockConsumeService ) { }

  public submenu : boolean = false;

  ngOnInit() {
    this.getViewMenu();

  }

  getViewMenu(){
    this.mockService.getMenuOptions()
    .subscribe( (resp:any) => {
      this.menuItems = resp;
      console.log('DATA: ', this.menuItems);
    });

  }

}
