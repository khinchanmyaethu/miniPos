import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { POSComponent } from './pos/pos.component';
import { ItemsComponent } from './pos/items/items.component';
import { CartComponent } from './pos/cart/cart.component';
import { ItemComponent } from './pos/items/item/item.component';
import { PrintComponent } from './print/print.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    POSComponent,
    ItemsComponent,
    CartComponent,
    ItemComponent,
    PrintComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
