import { Component, Input, OnInit } from '@angular/core';
import { BackHomeComponent } from '../../../shared/back-home/back-home.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [BackHomeComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent implements OnInit{
  basic = '0.00';
  retiro = '0.00';
  @Input('word') params!: string

  ngOnInit(): void {
    console.log(this.params);
  }
  details={
    lv1:{
      string:'Por cada Gafa adquirida por parte de tus referidos de Nivel 1 recibirás un 10%.',
      mount:'0.00'
    },
    lv2:{
      string:'Por cada Gafa adquirida por parte de tus referidos de Nivel 2 recibirás un 5%.',
      mount:'0.00'
    },
    lv3:{
      string:'Por cada Gafa adquirida por parte de tus referidos de Nivel 3 recibirás un 2%.',
      mount:'0.00'
    }
  }
}
