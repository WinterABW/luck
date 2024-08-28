import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./components/home/components/nav/nav.component";
import { ButtonsComponent } from "./components/buttons/buttons.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, ButtonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rd';
}
