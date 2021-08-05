import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export class Item {
  id: number = 0;
  name: string = '';
  price: number = 0;
  image: string = '';
  quantity: number = 0;
}

export const items: Item[] = [
  {
    id: 1,
    name: 'Frose Sorbet',
    price: 1200,
    image: '1.webp',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Lemon & Blueberries Parfait',
    price: 1200,
    image: '2.webp',
    quantity: 1,
  },
  {
    id: 3,
    name: 'Raspberry Rose Jelly',
    price: 1200,
    image: '3.webp',
    quantity: 1,
  },
  {
    id: 4,
    name: 'Savannah Buttermint',
    price: 1200,
    image: '4.webp',
    quantity: 1,
  },
  {
    id: 5,
    name: 'Sweet Cream Biscuits & Peach Jam',
    price: 1200,
    image: '5.webp',
    quantity: 1,
  },
  {
    id: 6,
    name: 'Caramel Pecan Sticky Buns',
    price: 1200,
    image: '6.webp',
    quantity: 1,
  },
  {
    id: 7,
    name: 'Blackout Chocolate Cake',
    price: 1200,
    image: '7.webp',
    quantity: 1,
  },
  {
    id: 8,
    name: 'Pineapple Upside Down Cake',
    price: 1200,
    image: '8.webp',
    quantity: 1,
  },
  {
    id: 9,
    name: 'Skillet Cinnamon Roll',
    price: 1200,
    image: '9.webp',
    quantity: 1,
  },
  {
    id: 10,
    name: 'Brambleberry Crisp',
    price: 1200,
    image: '10.webp',
    quantity: 1,
  },
  {
    id: 11,
    name: 'Salty Caramel',
    price: 1200,
    image: '11.webp',
    quantity: 1,
  },
  {
    id: 12,
    name: 'Salted Peanut Butter with Chocolate Flecks',
    price: 1200,
    image: '12.webp',
    quantity: 1,
  },
  {
    id: 13,
    name: 'Brown Butter Almond Brittle Pint',
    price: 1200,
    image: '13.webp',
    quantity: 1,
  },
  {
    id: 14,
    name: 'Buttercream Birthday Cake',
    price: 1200,
    image: '14.webp',
    quantity: 1,
  },
  {
    id: 15,
    name: 'Gooey Butter Cake',
    price: 1200,
    image: '15.webp',
    quantity: 1,
  },
  {
    id: 16,
    name: 'Cold Brew with Coconut Cream',
    price: 1200,
    image: '16.webp',
    quantity: 1,
  },
  {
    id: 17,
    name: 'Middle West Whiskey & Pecans',
    price: 1200,
    image: '17.webp',
    quantity: 1,
  },
  {
    id: 18,
    name: 'Wildberry Lavender',
    price: 1200,
    image: '18.webp',
    quantity: 1,
  },
  {
    id: 19,
    name: 'Cookies in Cream',
    price: 1200,
    image: '19.webp',
    quantity: 1,
  },
  {
    id: 20,
    name: 'Coffee with Cream & Sugar',
    price: 1200,
    image: '20.webp',
    quantity: 1,
  },
];

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  @Output() addedToCart = new EventEmitter<Item>();
  items: Item[] = [];
  constructor() {}

  addNewItem(item: Item) {
    this.addedToCart.emit({ ...item });
  }

  ngOnInit(): void {
    this.items = items;
  }
}
