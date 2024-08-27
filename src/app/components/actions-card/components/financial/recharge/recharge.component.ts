import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recharge',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './recharge.component.html',
  styleUrl: './recharge.component.scss'
})
export class RechargeComponent {
  print() {
    alert('coming...');
  }
}
