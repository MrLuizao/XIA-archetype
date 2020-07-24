import { Component, OnInit } from '@angular/core';
import { MockConsumeService } from 'src/app/Services/mock-consume.service';

@Component({
  selector: 'app-list-menu-items',
  templateUrl: './list-menu-items.component.html',
  styleUrls: ['./list-menu-items.component.scss']
})
export class ListMenuItemsComponent implements OnInit{

  
  constructor(private mockService: MockConsumeService) { }
  filterList = '';
  listMenu: any[] = [];

  ngOnInit() {

    this.mockService.getMenuOptions()
    .subscribe( (resp:any) => {
      // this.progressBar = false;
      this.listMenu = resp;
      console.log('listMenu Resp: ', this.listMenu);
      
    });
  }

}
