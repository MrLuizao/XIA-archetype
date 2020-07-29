import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-all-app',
  templateUrl: './nav-all-app.component.html',
  styleUrls: ['./nav-all-app.component.scss']
})
export class NavAllAppComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  goToDashboard(params){
    
    this.router.navigateByUrl('dashboard', params)
    console.log('llega con el click desde nav-all', params);

  }
}
