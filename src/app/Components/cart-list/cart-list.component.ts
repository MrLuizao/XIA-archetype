import { Component, OnInit } from '@angular/core';
import { MockConsumeService } from 'src/app/Services/mock-consume.service';
import { Product } from 'src/app/Models/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  public items: Array<Product>
  public totalPrice:number = 0;
  public totalQuantity:number = 0;

  constructor(public mockService: MockConsumeService) { }

  ngOnInit() {
    this.mockService.currentDataCart$.subscribe( item =>{

      if(item){
        this.items = item;
        this.totalQuantity = item.length;
        this.totalPrice = item.reduce((sum, current) => sum + (current.price * current.quantity), 0);
      }

    });
  }

  removeItem(product:Product){
    this.mockService.removeItemShopList(product);
    
  }

}
