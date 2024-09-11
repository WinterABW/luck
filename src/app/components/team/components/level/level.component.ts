import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-level',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './level.component.html',
  styleUrl: './level.component.scss',
})
export class LevelComponent {
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

  lvl1 = {
    register: 0,
    commission: 0,
    totalIncome: 0,
  };
  lvl2 = {
    register: 0,
    commission: 0,
    totalIncome: 0,
  };
  lvl3 = {
    register: 0,
    commission: 0,
    totalIncome: 0,
  };
}
