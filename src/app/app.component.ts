import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./common/nav/nav.component";
import { ButtonsComponent } from "./common/buttons/buttons.component";
import { BackgroundComponent } from './common/background/background.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BackgroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rd';
}
