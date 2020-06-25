import { Component, OnInit } from '@angular/core';
import { MockConsumeService } from 'src/app/Services/mock-consume.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataService: any[] = [];

  constructor( private mockService: MockConsumeService
               
              ) {
   }

  ngOnInit() {
    this.mockService.getDataDummy()
      .subscribe( (resp:any) => {
        this.dataService = resp;
        console.log('DATA: ', resp);
        
      });
  }

}
