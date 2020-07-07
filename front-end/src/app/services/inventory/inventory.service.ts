import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from 'src/app/models/Item/item';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  uri = 'http://localhost:3000/inventory';

  constructor(private http : HttpClient) { }


  getAllItems(){
    return this.http.get(this.uri);
  }

  getItemByID(id:string){
    return this.http.get(this.uri+'/'+id);
  }

  deleteItemByID(id:string){
    return this.http.delete(this.uri+'/'+id);
  }

  addnewItem(item:any){
    return this.http.post(this.uri, item);
  }

  updateItemQuantityByID(id:string, newQuantity:number){
    return this.http.patch(this.uri+'/'+id, newQuantity);
  }
}
