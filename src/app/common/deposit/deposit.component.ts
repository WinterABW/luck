import { Component } from '@angular/core';
import { BackHomeComponent } from '../../shared/back-home/back-home.component';
import { QrComponent } from './qr/qr.component';
import { AddressComponent } from './address/address.component';
import { InfoComponent } from './info/info.component';

@Component({
  selector: 'app-deposit',
  standalone: true,
  imports: [
    BackHomeComponent,
    QrComponent,
    AddressComponent,
    InfoComponent,
  ],
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.scss',
})
export class DepositComponent {

}
