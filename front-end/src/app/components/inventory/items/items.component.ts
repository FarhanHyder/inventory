import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item/item';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { MessengerService } from 'src/app/services/messenger/messenger.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items : Item[] = [];
  selectedItem : Item = null;

  constructor(
    private inventoryService : InventoryService,
    private messenger : MessengerService) { }

  ngOnInit(): void {
    this.loadItems();

    this.messenger.getMsg().subscribe(() => {
      this.loadItems(); //Event Trigger from messengerService
      
    })
  }

  loadItems(){
    this.inventoryService.getAllItems().subscribe((result : Item[]) =>{
      this.items = result;
      console.log(this.items);
      
    })
  }

  handleDelete(id){
    console.log(id);
  
    this.inventoryService.deleteItemByID(id)
    .subscribe(
      () => {
        this.messenger.sendMsg({
          msg: 'Item deleted!',
          type: 'success'
        })
      },
      () => {
        this.messenger.sendMsg({
          msg: 'Item could not be deleted!',
          type: 'danger'
        })
      }
    )
  }

  handleUpdate(item:Item){
    this.selectedItem = item;
    console.log(this.selectedItem);
    
  }

}
