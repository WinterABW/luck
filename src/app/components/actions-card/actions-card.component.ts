import { Component } from '@angular/core';
import { BarComponent } from './components/bar/bar.component';
import { FinancialComponent } from './components/financial/financial.component';

const components=[BarComponent,FinancialComponent]

@Component({
  selector: 'app-actions-card',
  standalone: true,
  imports: [components],
  templateUrl: './actions-card.component.html',
  styleUrl: './actions-card.component.scss',
})
export class ActionsCardComponent {
 
}
