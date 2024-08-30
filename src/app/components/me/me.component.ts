import { Component } from '@angular/core';

@Component({
  selector: 'app-me',
  standalone: true,
  imports: [],
  templateUrl: './me.component.html',
  styleUrl: './me.component.scss',
})
export class MeComponent {
  email = 'algo@mail.com';
  monto = '0.00';
  total = 0;
}
