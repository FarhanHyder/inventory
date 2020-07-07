import { Component, OnInit, Input } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { MessengerService } from 'src/app/services/messenger/messenger.service';
import { Item } from 'src/app/models/Item/item';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit {

  @Input() item : Item;
  quantity:number;
  // quantity:number = this.item.quantity;



  constructor(
    private inventoryService : InventoryService,
    private messenger : MessengerService
  ) { }

  ngOnInit(): void {
  }

  handleUpdate(){
    console.log(this.quantity);

    const updatedItem = {
      quantity: this.quantity
    }

    this.inventoryService.updateItemQuantityByID(this.item._id, updatedItem)
    .subscribe(
      () => {
        this.messenger.sendMsg({
          msg: 'Item quantity updated!',
          type: 'success'
        })
      },
      () => {
        this.messenger.sendMsg({
          msg: 'Item quantity could not be updated!',
          type: 'danger'
        })
      }
    )
    
  }



}
