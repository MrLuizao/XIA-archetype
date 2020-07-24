import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MockConsumeService {

  constructor(private _http: HttpClient) { 

  }

  getDataDummy(){

    return this._http.get('https://restcountries.eu/rest/v2/lang/es');
    
  }

  getMenuOptions(){

    return this._http.get('assets/data/menu.json');
    
  }

  getDataUsers(){

    return this._http.get('https://jsonplaceholder.typicode.com/users');
    // return this._http.get('assets/data/users.json');
    
  }

  getWarehouseList(){
    return this._http.get('assets/data/warehouse.json');
  }

}
