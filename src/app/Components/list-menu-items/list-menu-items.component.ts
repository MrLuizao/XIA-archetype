import { Component, OnInit } from '@angular/core';
import { MockConsumeService } from 'src/app/Services/mock-consume.service';

@Component({
  selector: 'app-list-menu-items',
  templateUrl: './list-menu-items.component.html',
  styleUrls: ['./list-menu-items.component.scss']
})
export class ListMenuItemsComponent implements OnInit{

  menuItems: any[] = [];

  constructor(private mockService: MockConsumeService) { }

  ngOnInit() {

    this.mockService.getDataUsers()
    .subscribe( (resp:any) => {
      // this.progressBar = false;
      this.menuItems = resp;
      console.log('DATA: ', resp);
      
    });
  }

}
