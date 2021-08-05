import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../pos/items/items.component';

export class Vouncher {
  items: Item[];
  total: number;
  paid: number;
  changed: number;
  constructor(items: Item[], total: number, paid: number, changed: number) {
    this.items = items;
    this.total = total;
    this.paid = paid;
    this.changed = changed;
  }
}
@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss'],
})
export class PrintComponent implements OnInit {
  @Input() vouncher: Vouncher = new Vouncher([], 0, 0, 0);
  constructor() {}

  ngOnInit(): void {}
}
