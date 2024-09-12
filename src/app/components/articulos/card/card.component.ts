import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  @Input() data:any={};
  id: number = 0;
  name: string = '';
  price: number = 0;
  total: number = 0;
  currency: string = '';

  ngOnInit(): void {
    this.cleanData()
  }

  cleanData(){
    const {id, name, price, total, currency} = this.data;
    this.id = id;
    this.name = name;
    this.price = price;
    this.total = total;
    this.currency = currency;
  }
}
