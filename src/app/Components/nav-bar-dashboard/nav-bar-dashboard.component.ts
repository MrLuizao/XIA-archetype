import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar-dashboard',
  templateUrl: './nav-bar-dashboard.component.html',
  styleUrls: ['./nav-bar-dashboard.component.scss']
})
export class NavBarDashboardComponent implements OnInit {

  public params;

  constructor( private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.params = this.route.snapshot.fragment; 
    console.log('así llega public params en NavBarDashboardComponent', this.params);

  }

  backToLastPage(){
    this.location.back();    
  }



}
