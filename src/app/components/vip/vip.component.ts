import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-vip',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './vip.component.html',
  styleUrl: './vip.component.scss'
})
export class VipComponent {

}
