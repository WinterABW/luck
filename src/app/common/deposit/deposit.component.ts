import { Component } from '@angular/core';
import { BackHomeComponent } from '../../shared/back-home/back-home.component';
import { QrComponent } from './qr/qr.component';

@Component({
  selector: 'app-deposit',
  standalone: true,
  imports: [BackHomeComponent,QrComponent],
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.scss'
})
export class DepositComponent {

}
