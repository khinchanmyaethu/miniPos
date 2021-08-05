import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Vouncher } from 'src/app/print/print.component';
import { Item } from '../items/items.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnChanges {
  @Input() cart: Item[] = [];
  @Output() vouncherPrinted = new EventEmitter<Vouncher>();
  total: number = 0;
  paid: number = 0;
  constructor() {}

  calculateTotal() {
    let total = 0;
    this.cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    this.total = total;
    return total;
  }

  getChanged() {
    return this.paid - this.total;
  }

  print() {
    this.vouncherPrinted.emit(
      new Vouncher(this.cart, this.total, this.paid, this.getChanged())
    );
    this.cart = [];
    this.paid = 0;
    setTimeout(() => {
      window.print();
    }, 100);
  }
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
