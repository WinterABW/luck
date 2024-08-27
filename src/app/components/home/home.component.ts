import { Component } from '@angular/core';
import { NoticeComponent } from '../notice/notice.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { ActionsCardComponent } from '../actions-card/actions-card.component';
import { CompanyComponent } from './components/company/company.component';
import { FinancialComponent } from "../actions-card/components/financial/financial.component";

const components = [NoticeComponent, CarouselComponent,ActionsCardComponent, CompanyComponent];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [components, FinancialComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
