import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { MessengerService } from 'src/app/services/messenger/messenger.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  name:string = '';
  quantity:number = 0;
  quantity_unit:string = 'piece';
  buy_price:number = 0;
  sell_price:number = 0;

  constructor(
    private inventoryService : InventoryService,
    private messenger : MessengerService
  ) { }

  ngOnInit(): void {
  }

  handleSubmit(){
    const newItem = {
      name : this.name,
      quantity: this.quantity,
      quantity_unit: this.quantity_unit,
      buy_price_per_unit: this.buy_price,
      sell_price_per_unit: this.sell_price
    }

    // console.log(newItem);
    

    this.inventoryService.addnewItem(newItem)
    .subscribe(
      () => {
        this.messenger.sendMsg({
          msg: 'Item added!',
          type: 'success'
        })
      },
      () => {
        this.messenger.sendMsg({
          msg: 'Item could not be added!',
          type: 'danger'
        })
      }
    )
  }

}
