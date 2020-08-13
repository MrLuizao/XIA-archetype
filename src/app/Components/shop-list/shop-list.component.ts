import { Component, OnInit } from '@angular/core';
import { MockConsumeService } from 'src/app/Services/mock-consume.service';
import { Product } from 'src/app/Models/product.model';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  listProduct: Product[] = [];
  
  constructor( public mockService: MockConsumeService) { }

  ngOnInit() {
    this.getShopItems();
  }

  getShopItems(){
    this.mockService.getDataDummy()
    .subscribe( (resp:any) => {
      this.listProduct = resp;
      console.log('data desde el service: ', this.listProduct);
    });
  }

  addToBuy(product: Product){
    this.mockService.changingShopList(product);
  }

}
