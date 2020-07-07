import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ItemsComponent } from './components/inventory/items/items.component';
import { QuantityComponent } from './components/inventory/items/update/quantity/quantity.component';
import { NewItemComponent } from './components/inventory/items/add/new-item/new-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    QuantityComponent,
    NewItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
