import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vouncher } from '../print/print.component';
import { Item } from './items/items.component';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss'],
})
export class POSComponent implements OnInit {
  cart: Item[] = [];
  @Output() vouncherSent = new EventEmitter<Vouncher>();
  constructor() {}

  isInclude(item: Item) {
    return this.cart.find((element) => element.id == item.id);
  }
  addToCart(item: Item) {
    if (this.isInclude(item)) {
      let index = this.cart.findIndex((element) => element.id == item.id);
      this.cart[index].quantity += 1;
    } else this.cart.push(item);
  }

  sendVouncher(vouncher: Vouncher) {
    this.vouncherSent.emit(vouncher);
  }

  ngOnInit(): void {}
}
