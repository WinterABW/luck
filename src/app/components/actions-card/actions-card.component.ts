import { Component } from '@angular/core';
import { BarComponent } from './components/bar/bar.component';

const components=[BarComponent]

@Component({
  selector: 'app-actions-card',
  standalone: true,
  imports: [components],
  templateUrl: './actions-card.component.html',
  styleUrl: './actions-card.component.scss',
})
export class ActionsCardComponent {
 
}
