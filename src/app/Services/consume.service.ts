import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { WarehouseModel } from '../Models/warehouse.model';

@Injectable({
  providedIn: 'root'
})
export class ConsumeService {

  constructor(private _http: HttpClient) { }

  getListDirectory(){
    return this._http.get(
       environment.URL_SERVER+
       environment.API+
       environment.VERSION+
       environment.ENDPOINT_DIRECTORY
    )
 }

 deleteRegistryFromDirectory( id: number ) : Observable<any>{
  return this._http.delete(
     environment.URL_SERVER+
     environment.API+
     environment.VERSION+
     environment.ENDPOINT_DIRECTORY+
     environment.ID_DIRECTORY+
     id)   
  }

  postCreateWarehouse( wareHouse: WarehouseModel ){

    const NEW_WAREHOUSE = {
       ...wareHouse
    };
    
    return this._http.post(
       environment.URL_SERVER+
       environment.API+
       environment.VERSION+
       environment.ENDPOINT_DIRECTORY,

       NEW_WAREHOUSE
    )
 }

}
