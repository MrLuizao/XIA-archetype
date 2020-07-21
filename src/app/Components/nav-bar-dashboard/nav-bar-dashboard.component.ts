import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-bar-dashboard',
  templateUrl: './nav-bar-dashboard.component.html',
  styleUrls: ['./nav-bar-dashboard.component.scss']
})
export class NavBarDashboardComponent implements OnInit {

  constructor( private location: Location ) { }

  ngOnInit() {
  }

  backToLastPage(){
    this.location.back();    
  }

}
