import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WarehouseModel } from '../Models/warehouse.model';

@Injectable({
  providedIn: 'root'
})
export class ConsumeService {

  constructor(private _http: HttpClient) { }

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
