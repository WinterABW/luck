import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ProductService } from '../../services/products/products.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgClass, CardComponent],
  templateUrl: './glasses.component.html',
})
export class TasksComponent implements OnInit {
  balance = '0.00';
  todayProfits = 0;
  profits = 0;
  list: any = [];
  btnC = true;

  private productService = inject(ProductService);

  ngOnInit(): void {
    this.gafasVR();
  }

  gafasVR() {
    this.list = this.productService.getProducts();
    this.btnC = true;
  }

  myGafas() {
    this.list = ['No items found'];
    this.btnC = false;
  }
}
