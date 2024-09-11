import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackHomeComponent } from '../../shared/back-home/back-home.component';

@Component({
  selector: 'app-recharge',
  standalone: true,
  imports: [BackHomeComponent],
  templateUrl: './recharge.component.html',
  styleUrl: './recharge.component.scss',
})
export class RechargeComponent {
  print() {
    alert('coming...');
  }
}
