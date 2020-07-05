import { Component, OnInit } from '@angular/core';
import { MockConsumeService } from 'src/app/Services/mock-consume.service';

@Component({
  selector: 'app-cards-home',
  templateUrl: './cards-home.component.html',
  styleUrls: ['./cards-home.component.scss']
})
export class CardsHomeComponent implements OnInit {

  dataService: any[] = [];

  constructor( private mockService: MockConsumeService,) { }

  ngOnInit() {
    this.mockService.getDataDummy()
    .subscribe( (resp:any) => {
      this.dataService = resp;
      console.log('DATA: ', resp);
      
    });
  }

}
