import { Component } from '@angular/core';
import { BackHomeComponent } from '../../../common/back-home/back-home.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [BackHomeComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {}
