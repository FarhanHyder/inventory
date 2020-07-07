import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item/item';
import { InventoryService } from 'src/app/services/inventory/inventory.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items : Item[] = [];

  constructor(private inventoryService : InventoryService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(){
    this.inventoryService.getAllItems().subscribe((result : Item[]) =>{
      this.items = result;
      console.log(this.items);
      
    })
  }

  handleDelete(id){
    console.log(id);
    
    this.inventoryService.deleteItemByID(id).subscribe(() => console.log('item deleted'));
  }

}
