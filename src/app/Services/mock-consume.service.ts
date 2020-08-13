import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockConsumeService {

  private shopList = new BehaviorSubject<Array<Product>>(null);
  public currentDataCart$ = this.shopList.asObservable();


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


  changingShopList(newData: Product) {

    let shopCurrentList = this.shopList.getValue();
    
    if(shopCurrentList)
    {
      shopCurrentList.findIndex((obj => obj == newData));
      shopCurrentList.push(newData);

    }else {
      shopCurrentList = [];
      shopCurrentList.push(newData);
    }

    this.shopList.next(shopCurrentList);
  }

  removeItemShopList(newData:Product){

    let shopCurrentList = this.shopList.getValue();
    let objIndex = shopCurrentList.findIndex((obj => obj == newData));

    if(objIndex != -1)
    {
      shopCurrentList[objIndex].quantity = 1;
      shopCurrentList.splice(objIndex,1);
    }

    this.shopList.next(shopCurrentList);
  }

}
